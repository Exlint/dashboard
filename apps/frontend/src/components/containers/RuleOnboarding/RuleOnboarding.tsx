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

	useEffect(() => {
		backendApi.get(`/user/inline-policies/rules/${policyId}`);
	}, []);

	const testResponse: Record<string, unknown[]> = {
		'Selector Type No Unknown': ['error'],
		'Function Url Scheme Allowed List': ['warn', { singlechild: true }],
	};

	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	const [selectedRulesListState, setSelectedRulesListState] = useState<IRule[]>([]);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [selectedPolicy, setSelectedPolicy] = useState<IPolicySidebar | null>(null);

	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

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

	useEffect(() => {
		Object.entries(testResponse).map((rule) => {
			let ruleObject: IRule = {};

			ruleObject = {
				ruleName: rule[0],
				alertType: (rule[1][0] as string) ?? '',
				category: rulesObject && rulesObject[rule[0]]?.category,
				hasConfig: rule[1]!.length > 1 ? true : false ?? false,
				configurations: `${JSON.stringify(rule[1])}` ?? '',
			};

			if (!selectedRulesListState.includes(ruleObject)) {
				setSelectedRulesListState((prev: IRule[]) => [...prev, ruleObject]);

				return;
			}

			return;
		});
	}, [selectedPolicy]);

	// const selectedRules: IRule[] | null = Object.entries(parasRulesList).map((rule) => {
	// 	const ruleObject = {
	// 		ruleName: Object.keys(rule[1])[0] ?? '',
	// 		alertType: (Object.values(rule[1])[0]![0] as unknown as string) ?? '',
	// 		category: rulesObject && rulesObject[Object.keys(rule[1])[0]!]?.category,
	// 		hasConfig: Object.values(rule[1])[0]!.length > 1 ? true : false ?? false,
	// 		configurations: JSON.stringify(Object.values(rule[1])[0]!) ?? '',
	// 	};

	// 	return ruleObject;
	// });

	const onSelectRule = (ruleName: string) => {
		const selectedRule = libraryData.rules![ruleName];
		setRuleCodeBasedConfigurationsInputState(() => `{"${ruleName}": ["off"]}`);

		selectedRule!.ruleName = ruleName;
		selectedRule!.alertType = ruleAlertTypes[selectedRuleAlertTypeIndexState];
		selectedRule!.configApi = 'ruleCodeBasedConfigurationsInputState';

		if (!isRuleOnUpdateState && selectedRule) {
			setSelectedRuleAlertTypeIndexState(() => 0);
			setSelectedRuleState(() => selectedRule);
		}
	};

	const onEditRule = (ruleName: string) => {
		console.log('onEdit', 'this is: ', ruleName);
		const selectedRule = libraryData.rules![ruleName];

		selectedRule!.ruleName = ruleName;

		setIsRuleOnUpdateState(() => true);
		for (const rule of selectedRulesListState) {
			if (rule.ruleName === ruleName) {
				const alertTypeIndex = ruleAlertTypes.indexOf(rule.alertType!);

				setSelectedRuleAlertTypeIndexState(() => alertTypeIndex);

				rule.configurations
					? setRuleCodeBasedConfigurationsInputState(
							() => `{"${ruleName}": ${rule.configurations!}}`,
					  )
					: setRuleCodeBasedConfigurationsInputState(() => `{"${ruleName}": [${rule.alertType}]}`);
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

	const onUpdateSelectedRulesList = (rule: IRule, method: string) => {
		if (method === 'post') {
			setSelectedRulesListState((prev: IRule[]) => [...prev, rule]);
		} else if (method === 'patch') {
			setSelectedRulesListState((prev) =>
				prev.map((ruleFromList) => {
					if (ruleFromList.ruleName === rule.ruleName) {
						return {
							...ruleFromList,
							alertType: ruleFromList.alertType,
							configurations: ruleFromList.category,
						};
					}

					return ruleFromList;
				}),
			);
		}
		onRemoveRule();
	};

	const onDoneButton = () => {
		nevigate('/group-center');
	};

	return (
		<RuleOnboardingView
			policyId={policyId}
			selectedPolicy={selectedPolicy}
			rulesObject={rulesObject}
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
