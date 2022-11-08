import React, { type FormEvent, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { ICreatePolicyDto, ICreatePolicyResponseData } from '@exlint-dashboard/common';
import type { PolicyLibrary } from '@prisma/client';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';

import NewPolicyView from './NewPolicy.view';

interface IProps {}

const NewPolicy: React.FC<IProps> = () => {
	const navigate = useNavigate();

	const params = useParams<{ readonly groupId: string }>();

	const [policyLabelState, setPolicyLabelState] = useState<string | null>(null);
	const [policyDescriptionState, setPolicyDescriptionState] = useState<string | null>(null);
	const [isPolicyLabelValidState, setIsPolicyLabelValidState] = useState<boolean>(false);
	const [isPolicyLabelAvailableState, setIsPolicyLabelAvaiableState] = useState<boolean | null>(null);
	const [selectedLibraryState, setSelectedLibraryState] = useState<PolicyLibrary | null>(null);

	const isSubmitEnabled = useMemo(() => {
		return isPolicyLabelValidState && selectedLibraryState !== null;
	}, [isPolicyLabelValidState, selectedLibraryState]);

	const onPolicyLabelChange = (value: string) => setPolicyLabelState(() => value);
	const onPolicyDescriptionChange = (value: string) => setPolicyDescriptionState(() => value);
	const onSetPolicyLabelValid = (value: boolean) => setIsPolicyLabelValidState(() => value);
	const onSetPolicyLabelAvailable = (value: boolean | null) => setIsPolicyLabelAvaiableState(() => value);
	const onLibrarySelect = (library: PolicyLibrary | null) => setSelectedLibraryState(() => library);

	const onCreatePolicy = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		backendApi
			.post<ICreatePolicyResponseData, AxiosResponse<ICreatePolicyResponseData>, ICreatePolicyDto>(
				`/user/inline-policies/${params.groupId}`,
				{
					label: policyLabelState!,
					description: policyDescriptionState,
					library: selectedLibraryState!,
				},
			)
			.then((response) => {
				navigate(`/group-center/${params.groupId}/policies/${response.data.id}`);
			});
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
