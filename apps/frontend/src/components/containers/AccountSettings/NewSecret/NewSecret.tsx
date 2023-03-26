import React, { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type {
	IAvailableLabelResponseData,
	ICreateSecretDto,
	ICreateSecretResponseData,
	IGetAllSecretsResponseData,
} from '@exlint.io/common';

import { useDebounce } from '@/hooks/use-debounce';
import BackendService from '@/services/backend';
import useBackend from '@/hooks/use-backend';

import { WEEK_INTERVAL } from './models/time';

import NewSecretView from './NewSecret.view';

interface IProps {}

const NewSecret: React.FC<IProps> = () => {
	const currentDate = new Date();
	const nextWeekDate = new Date(currentDate.getTime() + WEEK_INTERVAL);

	const navigate = useNavigate();

	const [secretLabelInputState, setSecretLabelInputState] = useState<string | null>(null);
	const [isSecretLabelValidState, setIsSecretLabelValidState] = useState<boolean>(false);
	const [isSecretLabelAvailableState, setIsSecretLabelAvailableState] = useState<boolean | null>(null);
	const [selectedOptionIndexState, setSelectedOptionIndexState] = useState<number>(0);
	const [selectedDateState, setSelectedDateState] = useState<Date | null>(nextWeekDate);

	const { mutate: getAllSecretsMutate } = useBackend<IGetAllSecretsResponseData>('/user/secrets');

	useEffect(() => {
		if (
			secretLabelInputState === '' ||
			secretLabelInputState === null ||
			secretLabelInputState.length > 30
		) {
			setIsSecretLabelValidState(() => false);
		}
	}, [secretLabelInputState]);

	useDebounce(
		() => {
			if (
				secretLabelInputState === '' ||
				secretLabelInputState === null ||
				secretLabelInputState.length > 30
			) {
				setIsSecretLabelValidState(() => false);
			} else {
				BackendService.get<IAvailableLabelResponseData>(
					`/user/secrets/${secretLabelInputState}`,
				).then((responseData) => {
					setIsSecretLabelValidState(() => responseData.isAvailable);
					setIsSecretLabelAvailableState(() => responseData.isAvailable);
				});
			}
		},
		[secretLabelInputState],
		400,
	);

	const onSecretLabelInputChange = (value: string) => {
		setSecretLabelInputState(() => value);
		setIsSecretLabelAvailableState(() => null);
		setIsSecretLabelValidState(() => false);
	};

	const onSelectExpirationDate = (index: number, value: Date | null) => {
		setSelectedOptionIndexState(() => index);
		setSelectedDateState(() => value);
	};

	const onGenerateSecret = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const secretExpiration = selectedDateState ? selectedDateState.getTime() : null;

		const responseData = await BackendService.post<ICreateSecretResponseData, ICreateSecretDto>(
			'/user/secrets',
			{
				label: secretLabelInputState!,
				expiration: secretExpiration,
			},
		);

		await getAllSecretsMutate((currentData) => ({
			...currentData,
			secrets: [
				...currentData!.secrets,
				{ expiration: secretExpiration, label: secretLabelInputState!, id: responseData.id },
			],
		}));

		navigate('/account-settings/secret-management', {
			state: {
				...responseData,
				label: secretLabelInputState!,
				expiration: selectedDateState,
			},
		});
	};

	return (
		<NewSecretView
			secretLabelInput={secretLabelInputState}
			isSecretLabelValid={isSecretLabelValidState}
			selectedOptionIndex={selectedOptionIndexState}
			isSecretLabelAvailable={isSecretLabelAvailableState}
			onSecretLabelInputChange={onSecretLabelInputChange}
			onSelectExpirationDate={onSelectExpirationDate}
			onGenerateSecret={onGenerateSecret}
		/>
	);
};

NewSecret.displayName = 'NewSecret';
NewSecret.defaultProps = {};

export default React.memo(NewSecret);
