import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';
import type { IGetPolicyResponseData } from '@/interfaces/responses';

import PolicyConfigurationView from './PolicyConfiguration.view';

interface IProps {}

const PolicyConfiguration: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const { policyId } = useParams();

	const route = useLocation();

	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	let currentPage: string | null = null;

	if (route.pathname.includes('/edit')) {
		currentPage = 'edit';
	}

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

	const onSaveConfiguration = () => {
		if (ruleCodeBasedConfigurationsInputState.length > 0) {
			backendApi
				.patch(`/user/inline-policies/${policyId}`, {
					configuration: JSON.stringify(ruleCodeBasedConfigurationsInputState),
				})
				.then(() => {
					navigate('/group-center');
				});
		} else {
			navigate('/group-center');
		}
	};

	useEffect(() => {
		backendApi.get<IGetPolicyResponseData>(`/user/inline-policies/${policyId}`).then((response) =>
			setSelectedPolicy({
				groupLabel: response.data.groupLabel === null ? 'New Group' : response.data.groupLabel,
				policyLabel: response.data.label,
				libraryName: response.data.library,
				createdAt: response.data.createdAt,
			}),
		);
	}, [backendApi]);

	return (
		<PolicyConfigurationView
			currentPage={currentPage}
			selectedPolicy={selectedPolicy}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			isEditFileFormat={isEditFileFormatState}
			onUpdatePolicyConfiguration={onUpdatePolicyConfiguration}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
			onEditFileFormatButton={onEditFileFormatButton}
			onSaveConfiguration={onSaveConfiguration}
		/>
	);
};

PolicyConfiguration.displayName = 'RuleCreation';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);
