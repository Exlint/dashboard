import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';
import type { ILibraryData } from '@/interfaces/libraries';
import type { IGetPolicyResponseData } from '@/interfaces/responses';
import { librariesData } from '@/data/libraries-data';

import PolicyConfigurationView from './PolicyConfiguration.view';

interface IProps {}

const PolicyConfiguration: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const { policyId } = useParams();

	let libraryNameInLowerCase: 'eslint' | 'stylelint' | 'depcheck' | 'prettier' | 'inflint';

	let libraryData: ILibraryData;

	const route = useLocation();

	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [shouldSkipRulesOnboarding, setShouldSkipRulesOnboarding] = useState<boolean>(false);

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

	useEffect(() => {
		if (selectedPolicy) {
			libraryNameInLowerCase = selectedPolicy?.libraryName.toLocaleLowerCase() as Lowercase<
				ILibraryData['name']
			>;

			libraryData = libraryNameInLowerCase && librariesData[libraryNameInLowerCase];

			if (libraryData.rules === undefined) {
				setShouldSkipRulesOnboarding(() => true);
			}
		}

		if (route.pathname.includes('/edit')) {
			setShouldSkipRulesOnboarding(() => true);
		}
	}, [selectedPolicy, route]);

	return (
		<PolicyConfigurationView
			policyId={policyId}
			shouldSkipRulesOnboarding={shouldSkipRulesOnboarding}
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
