import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { ILibraryData } from '@/interfaces/libraries';
import { librariesData } from '@/data/libraries-data';
import type { IRule } from '@/interfaces/rule';
import { ruleAlertTypes } from '@/data/rule-alert-types';

import RuleOnboardingView from './RuleOnboarding.view';
import { backendApi } from '@/utils/http';
import { IGetPolicyResponseData } from '@/interfaces/responses';
import { IPolicySidebar } from '@/interfaces/policy-sidebar';

interface IProps {}

const RuleOnboarding: React.FC<IProps> = () => {
	const { policyId } = useParams();

	// const selectedRulesFromDb: string[] = [];
	// useEffect(() => {
	// 	backendApi.get(`/user/inline-policies/rules/${policyId}`).then((res) => console.log(res.data));
	// }, []);

	const testResponse: Record<string, any[]> = {
		'Getter Return': ['error'],
		'Grouped Accessor Pairs': ['warn', { singlechild: true }],
	};

	// const response:string [] = [
	// 	'{"Getter Return":"error"}',
	// 	'{"Grouped Accessor Pairs":"warn", "singlechild": "true" }',
	// 	'{"Generator Star Spacing":"off","yazifConfig2":"yazifos"}',
	// ];

	const [selectedLibraryState] = useState<ILibraryData>(librariesData.eslint);
	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const parasRulesList = Object.entries(testResponse).map((rule) => {
		console.log(rule[0]);
		console.log(rule[1]);

		// const parasRule = JSON.parse(rule[0]);

		// const ruleObject = {
		// 	...parasRule,
		// };

		const ruleObject = { ...rule };

		return ruleObject;
	});

	const selectedRulesList: IRule[] | null = parasRulesList.map((rule) => {
		const ruleObject = {
			ruleName: Object.keys(rule)[0]!,
			alertType: 'linter',

			category: selectedLibraryState.rules![Object.keys(rule)[0]!]?.category ?? '',
			hasConfig: Object.keys(rule)[1] ? true : false,
			configurations: JSON.stringify(rule),
		};

		return ruleObject;
	});

	const onSelectRule = (ruleName: string) => {
		const selectedRule = selectedLibraryState.rules![ruleName];

		selectedRule!.ruleName = ruleName;

		if (!isRuleOnUpdateState && selectedRule) {
			setSelectedRuleAlertTypeIndexState(() => 0);
			setRuleCodeBasedConfigurationsInputState(() => `{"${ruleName}": ["off"]}`);
			setSelectedRuleState(() => selectedRule);
		}
	};

	const onEditRule = (ruleName: string) => {
		const selectedRule = selectedLibraryState.rules![ruleName];

		selectedRule!.ruleName = ruleName;

		setIsRuleOnUpdateState(() => true);

		for (const rule of selectedRulesList) {
			if (rule.ruleName === ruleName) {
				const alertTypeIndex = ruleAlertTypes.indexOf(rule.alertType!);

				setSelectedRuleAlertTypeIndexState(() => alertTypeIndex);

				rule.configurations && setRuleCodeBasedConfigurationsInputState(() => rule.configurations!);
			}
		}

		selectedRule && setSelectedRuleState(() => selectedRule);
	};

	const onRemoveRule = () => {
		setSelectedRuleState(null);
		setSelectedRuleAlertTypeIndexState(() => -1);
		setIsRuleOnUpdateState(() => false);
	};

	const onSelectedRuleAlertType = (index: number) => {
		setSelectedRuleAlertTypeIndexState(() => index);
	};

	const onCodeBasedConfigurationsInputChanged = (input: string) => {
		setRuleCodeBasedConfigurationsInputState(() => input);
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

	return (
		<RuleOnboardingView
			policyId={policyId}
			selectedPolicy={selectedPolicy}
			selectedLibrary={selectedLibraryState}
			selectedRule={selectedRuleState}
			selectedRuleAlertTypeIndex={selectedRuleAlertTypeIndexState}
			isRuleOnUpdate={isRuleOnUpdateState}
			selectedRulesList={selectedRulesList}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			onSelectRule={onSelectRule}
			onEditRule={onEditRule}
			onRemoveRule={onRemoveRule}
			onSelectedRuleAlertType={onSelectedRuleAlertType}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
		/>
	);
};

RuleOnboarding.displayName = 'RuleOnboarding';
RuleOnboarding.defaultProps = {};

export default React.memo(RuleOnboarding);
