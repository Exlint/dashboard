import React from 'react';
import { useNavigate } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IGetPolicyIdResponseData } from '@/interfaces/responses';

import PolicyConfigurationButtonView from './PolicyConfigurationButton.view';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: string | null;
	readonly policyLabelInput: string | null;
	readonly isButtonDisabled: boolean;
}

const PolicyConfigurationButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onCreateNewPolicy = () => {
		backendApi
			.post<IGetPolicyIdResponseData>(`/user/inline-policies/${props.selectedGroupId}`, {
				label: props.policyLabelInput,
				library: props.selectedLibrary?.toLocaleUpperCase(),
			})
			.then((response) => navigate(`/policy-configuration/${response.data.policyId}`));
		navigate('/policy-configuration/123456');
	};

	return (
		<PolicyConfigurationButtonView
			isButtonDisabled={props.isButtonDisabled}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

PolicyConfigurationButton.displayName = 'PolicyConfigurationButton';
PolicyConfigurationButton.defaultProps = {};

export default React.memo(PolicyConfigurationButton);
