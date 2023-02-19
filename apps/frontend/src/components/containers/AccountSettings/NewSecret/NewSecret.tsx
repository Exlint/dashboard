import React, { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type {
	IAvailableLabelResponseData,
	ICreateSecretDto,
	ICreateSecretResponseData,
} from '@exlint.io/common';
import type { AxiosResponse } from 'axios';

import { useDebounce } from '@/hooks/use-debounce';
import { backendApi } from '@/utils/http';

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
				backendApi
					.get<IAvailableLabelResponseData>(`/user/secrets/${secretLabelInputState}`)
					.then((response) => {
						setIsSecretLabelValidState(() => response.data.isAvailable);
						setIsSecretLabelAvailableState(() => response.data.isAvailable);
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

	const onGenerateSecret = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		backendApi
			.post<ICreateSecretResponseData, AxiosResponse<ICreateSecretResponseData>, ICreateSecretDto>(
				'/user/secrets',
				{
					label: secretLabelInputState!,
					expiration: selectedDateState ? selectedDateState.getTime() : null,
				},
			)
			.then((response) => {
				navigate('/account-settings/secret-management', {
					state: {
						...response.data,
						label: secretLabelInputState!,
						expiration: selectedDateState,
					},
				});
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
