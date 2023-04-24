import React, { type FormEvent, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { ICreatePolicyDto, ICreatePolicyResponseData } from '@exlint.io/common';
import type { PolicyLibrary } from '@prisma/client';

import BackendService from '@/services/backend';

import NewPolicyView from './NewPolicy.view';

interface IProps {}

const NewPolicy: React.FC<IProps> = () => {
	const navigate = useNavigate();

	const params = useParams<{ readonly complianceId: string }>();

	const [policyLabelState, setPolicyLabelState] = useState<string | null>(null);
	const [policyDescriptionState, setPolicyDescriptionState] = useState<string | null>(null);
	const [isPolicyLabelValidState, setIsPolicyLabelValidState] = useState<boolean>(false);
	const [isPolicyLabelAvailableState, setIsPolicyLabelAvailableState] = useState<boolean | null>(null);
	const [selectedLibraryState, setSelectedLibraryState] = useState<PolicyLibrary | null>(null);

	const isSubmitEnabled = useMemo(() => {
		return isPolicyLabelValidState && selectedLibraryState !== null;
	}, [isPolicyLabelValidState, selectedLibraryState]);

	const onPolicyLabelChange = (value: string) => setPolicyLabelState(() => value);
	const onPolicyDescriptionChange = (value: string) => setPolicyDescriptionState(() => value);
	const onSetPolicyLabelValid = (value: boolean) => setIsPolicyLabelValidState(() => value);
	const onSetPolicyLabelAvailable = (value: boolean | null) => setIsPolicyLabelAvailableState(() => value);
	const onLibrarySelect = (library: PolicyLibrary | null) => setSelectedLibraryState(() => library);

	const onCreatePolicy = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const responseData = await BackendService.post<ICreatePolicyResponseData, ICreatePolicyDto>(
			`/user/inline-policies/${params.complianceId}`,
			{
				label: policyLabelState!,
				description: policyDescriptionState,
				library: selectedLibraryState!,
			},
		);

		navigate(`/compliance-center/${params.complianceId}/policies/${responseData.id}`);
	};

	return (
		<NewPolicyView
			policyLabel={policyLabelState}
			policyDescription={policyDescriptionState}
			isPolicyLabelValid={isPolicyLabelValidState}
			isPolicyLabelAvailable={isPolicyLabelAvailableState}
			isSubmitEnabled={isSubmitEnabled}
			selectedLibrary={selectedLibraryState}
			onPolicyLabelChange={onPolicyLabelChange}
			onPolicyDescriptionChange={onPolicyDescriptionChange}
			onSetPolicyLabelValid={onSetPolicyLabelValid}
			onSetPolicyLabelAvailable={onSetPolicyLabelAvailable}
			onLibrarySelect={onLibrarySelect}
			onCreatePolicy={onCreatePolicy}
		/>
	);
};

NewPolicy.displayName = 'NewPolicy';
NewPolicy.defaultProps = {};

export default React.memo(NewPolicy);
