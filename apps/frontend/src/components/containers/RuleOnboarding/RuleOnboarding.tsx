import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import type { ILibraryData } from '@/interfaces/libraries';
import { librariesData } from '@/data/libraries-data';
import type { IRule } from '@/interfaces/rule';
import { ruleAlertTypes } from '@/data/rule-alert-types';

import RuleOnboardingView from './RuleOnboarding.view';

interface IProps {}

const RuleOnboarding: React.FC<IProps> = () => {
	const response: string[] = [
		'{"Getter Return":"error"}',
		'{"Grouped Accessor Pairs":"warn", "singlechild": "true" }',
		'{"Generator Star Spacing":"off","yazifConfig2":"yazifos"}',
	];

	const [selectedLibraryState] = useState<ILibraryData>(librariesData.eslint);
	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);
	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const { policyId } = useParams();

	const parasRulesList = response.map((rule) => {
		const parasRule = JSON.parse(rule);

		const ruleObject = {
			...parasRule,
		};

		return ruleObject;
	});

	const selectedRulesList: IRule[] | null = parasRulesList.map((rule) => {
		console.log(rule, 'rule');
		const ruleObject = {
			ruleName: Object.keys(rule)[0]!,
			alertType: rule[Object.keys(rule)[0]!],
			category: selectedLibraryState.rules![Object.keys(rule)[0]!]?.category!,
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
		for (let rule of selectedRulesList) {
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

	return (
		<RuleOnboardingView
			policyId={policyId}
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
