import React, { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import type {
	IAvailableLabelResponseData,
	ICreateComplianceDto,
	ICreateComplianceResponseData,
	IGetAllCompliancesResponseData,
} from '@exlint.io/common';

import { useDebounce } from '@/hooks/use-debounce';
import useBackend from '@/hooks/use-backend';
import BackendService from '@/services/backend';

import NewComplianceView from './NewCompliance.view';

interface IProps {}

const NewCompliance: React.FC<IProps> = () => {
	const [complianceLabelInputState, setComplianceLabelInputState] = useState<string | null>(null);

	const [complianceDescriptionInputState, setComplianceDescriptionInputState] = useState<string | null>(
		null,
	);

	const [isComplianceLabelValidState, setIsComplianceLabelValidState] = useState<boolean>(false);

	const [isComplianceLabelAvailableState, setIsComplianceLabelAvailableState] = useState<boolean | null>(
		null,
	);

	const { mutate: getAllCompliancesMutate } =
		useBackend<IGetAllCompliancesResponseData>('/user/compliances');

	const navigate = useNavigate();

	useEffect(() => {
		if (
			complianceLabelInputState === '' ||
			complianceLabelInputState === null ||
			complianceLabelInputState.length > 30
		) {
			setIsComplianceLabelValidState(() => false);
		}
	}, [complianceLabelInputState]);

	useDebounce(
		() => {
			if (
				complianceLabelInputState === '' ||
				complianceLabelInputState === null ||
				complianceLabelInputState.length > 30
			) {
				setIsComplianceLabelValidState(() => false);
			} else {
				BackendService.get<IAvailableLabelResponseData>(
					`/user/compliances/available/${complianceLabelInputState}`,
				).then((responseData) => {
					setIsComplianceLabelValidState(() => responseData.isAvailable);
					setIsComplianceLabelAvailableState(() => responseData.isAvailable);
				});
			}
		},
		[complianceLabelInputState],
		400,
	);

	const onComplianceLabelInputChange = (value: string) => {
		setComplianceLabelInputState(() => value);
		setIsComplianceLabelAvailableState(() => null);
		setIsComplianceLabelValidState(() => false);
	};

	const onComplianceDescriptionInputChange = (value: string) => {
		setComplianceDescriptionInputState(() => value);
	};

	const onCreateCompliance = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const responseData = await BackendService.post<ICreateComplianceResponseData, ICreateComplianceDto>(
			'/user/compliances',
			{
				label: complianceLabelInputState!,
				description:
					complianceDescriptionInputState !== null && complianceDescriptionInputState !== ''
						? complianceDescriptionInputState
						: null,
			},
		);

		await getAllCompliancesMutate((currentData) => {
			if (!currentData) {
				return;
			}

			return {
				...currentData,
				compliances: [
					...currentData.compliances,
					{ id: responseData.id, label: complianceLabelInputState!, librariesNames: [] },
				],
			};
		});

		scroller.scrollTo('compliance-list-end', {
			containerId: 'compliance-list-container',
			smooth: true,
			duration: 500,
		});

		navigate(`/compliance-center/${responseData.id}`);
	};

	return (
		<NewComplianceView
			complianceLabelInput={complianceLabelInputState}
			complianceDescriptionInput={complianceDescriptionInputState}
			isComplianceLabelValid={isComplianceLabelValidState}
			isComplianceLabelAvailable={isComplianceLabelAvailableState}
			onComplianceLabelInputChange={onComplianceLabelInputChange}
			onComplianceDescriptionInputChange={onComplianceDescriptionInputChange}
			onCreateCompliance={onCreateCompliance}
		/>
	);
};

NewCompliance.displayName = 'NewCompliance';
NewCompliance.defaultProps = {};

export default React.memo(NewCompliance);
