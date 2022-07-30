import React, { useState } from 'react';
import type { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IUpdatePolicyConfiguration } from '@/interfaces/responses';

import PolicyConfigurationView from './PolicyConfiguration.view';

interface IProps {}

const PolicyConfiguration: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const { policyId } = useParams();

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	const onCodeBasedConfigurationsInputChanged = (input: string) => {
		setRuleCodeBasedConfigurationsInputState(() => input);
	};

	const onEditFileFormatButton = () => {
		setIsEditFileFormatState(() => !isEditFileFormatState);
	};

	const onUpdatePolicyConfiguration = () => {
		if (ruleCodeBasedConfigurationsInputState.length > 0) {
			backendApi
				.post<IUpdatePolicyConfiguration>(`/user/inline-policies/${policyId}`, {
					configuration: ruleCodeBasedConfigurationsInputState,
				})
				.then(() => {
					navigate('/');
				})
				.catch((err: AxiosError) => {
					//TODO: Add action when catch error
					alert(err.response?.data);
				});
		} else {
			navigate('/');
		}
	};

	return (
		<PolicyConfigurationView
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			isEditFileFormat={isEditFileFormatState}
			onUpdatePolicyConfiguration={onUpdatePolicyConfiguration}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
			onEditFileFormatButton={onEditFileFormatButton}
		/>
	);
};

PolicyConfiguration.displayName = 'RuleCreation';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);
