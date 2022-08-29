import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';
import type { IGetPolicyResponseData } from '@/interfaces/responses';

import PolicyConfigurationView from './PolicyConfiguration.view';

interface IProps {}

const PolicyConfiguration: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const { policyId } = useParams();

	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	const onCodeBasedConfigurationsInputChanged = (input: string) => {
		setRuleCodeBasedConfigurationsInputState(() => input);
	};

	const onEditFileFormatButton = () => {
		setIsEditFileFormatState((prev) => !prev);
	};

	const onUpdatePolicyConfiguration = () => {
		if (ruleCodeBasedConfigurationsInputState.length > 0) {
			backendApi
				.post(`/user/inline-policies/${policyId}`, {
					configuration: JSON.stringify(ruleCodeBasedConfigurationsInputState),
				})
				.then(() => {
					navigate(`/rule-onboarding/${policyId}`);
				});
		} else {
			navigate(`/rule-onboarding/${policyId}`);
		}
	};

	useEffect(() => {
		backendApi.get<IGetPolicyResponseData>(`/user/inline-policies/${policyId}`).then((response) =>
			setSelectedPolicy({
				groupLabel: response.data.groupLabel,
				policyLabel: response.data.label,
				libraryName: response.data.library,
				createdAt: response.data.createdAt,
			}),
		);
	}, [backendApi]);

	console.log(selectedPolicy, 'sletetdtd policycy');

	return (
		<PolicyConfigurationView
			selectedPolicy={selectedPolicy}
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
