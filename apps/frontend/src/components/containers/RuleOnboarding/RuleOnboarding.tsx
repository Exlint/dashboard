/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IGetPolicyResponseData } from '@/interfaces/responses';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';
import type { ILibraryData, ILibraryRule } from '@/interfaces/libraries';
import { librariesData } from '@/data/libraries-data';
import type { IRule } from '@/interfaces/rule';
import { ruleAlertTypes } from '@/data/rule-alert-types';

import RuleOnboardingView from './RuleOnboarding.view';

interface IProps {}

const RuleOnboarding: React.FC<IProps> = () => {
	const { policyId } = useParams();
	const nevigate = useNavigate();

	let libraryNameInLowerCase: 'eslint' | 'stylelint' | 'depcheck' | 'prettier' | 'inflint';
	let libraryData: ILibraryData;
	let rulesObject: Record<string, ILibraryRule> | undefined;

	// const selectedRulesFromDb: string[] = [];

	useEffect(() => {
		backendApi.get(`/user/inline-policies/rules/${policyId}`).then((res) => console.log(res, 'resssss'));
	}, []);

	const testResponse: Record<string, unknown[]> = {
		'Getter Return': ['error'],
		'Grouped Accessor Pairs': ['warn', { singlechild: true }],
	};

	const [selectedLibraryState] = useState<ILibraryData>(librariesData.eslint);
	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	// const [selectedRulesState, setSelectedRulesState] = useState<IRule[] | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const parasRulesList = Object.entries(testResponse).map((rule) => {
		// console.log(rule, 'Rule');
		// console.log(rule[0], 0);
		// console.log(rule[1], 1);

		// const parasRule = JSON.parse(rule[0]);s

		// const ruleObject = {
		// 	...parasRule,
		// };
		let ruleObject: Record<string, unknown[]> = {};

		ruleObject = {
			...ruleObject,
			[rule[0]]: JSON.parse(rule[1] as unknown as string),
		};

		return ruleObject;
	});

	console.log(rulesObject, 'ruleObject');
	console.log(rulesObject, 'ruleObject');

	const test: IRule[] | null = Object.entries(parasRulesList).map((rule) => {
		console.log(rule, 'rule');
		const ruleObject = {
			ruleName: Object.keys(rule[1])[0],
			alertType: JSON.stringify(Object.values(rule[1])[0] as unknown as string),
			category: selectedLibraryState.rules![Object.keys(rule)[0]!]?.category ?? '',
			hasConfig: Object.keys(rule)[1] ? true : false,
			configurations: JSON.stringify(rule),
		};

		return ruleObject;
	});

	console.log(test, 'rulesList');

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
		const selectedRule = libraryData.rules![ruleName];

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

	// const onUpdateSelectedRulesList = (rule: IRule) => {
	// 	setSelectedRulesState(selectedRulesState?.push(rule))
	// }

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

	if (selectedPolicy) {
		libraryNameInLowerCase = selectedPolicy?.libraryName.toLocaleLowerCase() as Lowercase<
			ILibraryData['name']
		>;

		libraryData = libraryNameInLowerCase && librariesData[libraryNameInLowerCase];

		rulesObject = libraryData?.rules;
	}

	const onDoneButton = () => {
		nevigate('/group-center');
	};

	return (
		<RuleOnboardingView
			policyId={policyId}
			selectedPolicy={selectedPolicy}
			rulesObject={rulesObject}
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
			onDoneButton={onDoneButton}
		/>
	);
};

RuleOnboarding.displayName = 'RuleOnboarding';
RuleOnboarding.defaultProps = {};

export default React.memo(RuleOnboarding);
