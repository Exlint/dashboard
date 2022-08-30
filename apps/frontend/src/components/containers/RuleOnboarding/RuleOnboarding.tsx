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
		backendApi.get(`/user/inline-policies/rules/${policyId}`);
	}, []);

	const testResponse: Record<string, unknown[]> = {
		'Getter Return': ['error'],
		'Grouped Accessor Pairs': ['warn', { singlechild: true }],
	};

	const [selectedLibraryState] = useState<ILibraryData>(librariesData.eslint);
	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	const [selectedRulesListState, setSelectedRulesListState] = useState<IRule[]>([]);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const parasRulesList = Object.entries(testResponse).map((rule) => {
		let ruleObject: Record<string, unknown[]> = {};

		ruleObject = {
			...ruleObject,
			[rule[0]]: rule[1],
		};

		return ruleObject;
	});

	const selectedRulesList: IRule[] | null = Object.entries(parasRulesList).map((rule) => {
		const ruleObject = {
			ruleName: Object.keys(rule[1])[0] ?? '',
			alertType: (Object.values(rule[1])[0]![0] as unknown as string) ?? '',
			category: selectedLibraryState.rules![Object.keys(rule[1])[0]!]?.category ?? '',
			hasConfig: Object.values(rule[1])[0]!.length > 1 ? true : false ?? false,
			configurations: JSON.stringify(Object.values(rule[1])[0]!) ?? '',
		};

		return ruleObject;
	});

	const onSelectRule = (ruleName: string) => {
		const selectedRule = libraryData.rules![ruleName];

		selectedRule!.ruleName = ruleName;
		selectedRule!.alertType = ruleAlertTypes[selectedRuleAlertTypeIndexState];

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

		if (selectedRulesList) {
			for (const rule of selectedRulesList) {
				if (rule.ruleName === ruleName) {
					const alertTypeIndex = ruleAlertTypes.indexOf(rule.alertType!);

					setSelectedRuleAlertTypeIndexState(() => alertTypeIndex);

					rule.configurations &&
						setRuleCodeBasedConfigurationsInputState(
							() => `{"${ruleName}": ${rule.configurations!}}`,
						);
				}
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

	const onUpdateSelectedRulesList = (rule: IRule) => {
		setSelectedRulesListState((prev: IRule[]) => [...prev, rule]);
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
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			selectedRulesList={selectedRulesListState}
			onSelectRule={onSelectRule}
			onEditRule={onEditRule}
			onRemoveRule={onRemoveRule}
			onSelectedRuleAlertType={onSelectedRuleAlertType}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
			onDoneButton={onDoneButton}
			onUpdateSelectedRulesList={onUpdateSelectedRulesList}
		/>
	);
};

RuleOnboarding.displayName = 'RuleOnboarding';
RuleOnboarding.defaultProps = {};

export default React.memo(RuleOnboarding);
