import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import type { ILibraryData } from '@/interfaces/libraries';
import { librariesData } from '@/data/libraries-data';
import type { IRule } from '@/interfaces/rule';

import RuleOnboardingView from './RuleOnboarding.view';

interface IProps {}

const RuleOnboarding: React.FC<IProps> = () => {
	const response: string[] = [
		'{"Getter Return":"error"}',
		'{"Grouped Accessor Pairs":"warn", "singlechild": "true" }',
		'{"Generator Star Spacing":"error","yazifConfig2":"yazifos"}',
	];

	const [selectedLibraryState] = useState<ILibraryData>(librariesData.eslint);
	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);

	const { policyId } = useParams();

	const onSelectRule = (ruleName: string) => {
		const selectedRule = selectedLibraryState.rules![ruleName];
		selectedRule!.ruleName = ruleName;

		if (!isRuleOnUpdateState && selectedRule) {
			setSelectedRuleAlertTypeIndexState(() => 0);
			setSelectedRuleState(() => selectedRule);
		}
	};

	const onEditRule = (ruleName: string) => {
		const selectedRule = selectedLibraryState.rules![ruleName];
		selectedRule!.ruleName = ruleName;

		setIsRuleOnUpdateState(() => true);
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

	const parasRulesList = response.map((rule) => {
		const parasRule = JSON.parse(rule);

		const ruleObject = {
			...parasRule,
		};

		return ruleObject;
	});

	const selectedRulesList: IRule[] | null = parasRulesList.map((rule) => {
		const ruleObject = {
			ruleName: Object.keys(rule)[0]!,
			alertType: JSON.stringify(Object.keys(rule)[0]),
			category: selectedLibraryState.rules![Object.keys(rule)[0]!]?.category!,
			hasConfig: Object.keys(rule)[1] ? true : false,
			config: rule,
		};

		return ruleObject;
	});

	return (
		<RuleOnboardingView
			policyId={policyId}
			selectedLibrary={selectedLibraryState}
			selectedRule={selectedRuleState}
			selectedRuleAlertTypeIndex={selectedRuleAlertTypeIndexState}
			isRuleOnUpdate={isRuleOnUpdateState}
			selectedRulesList={selectedRulesList}
			onSelectRule={onSelectRule}
			onEditRule={onEditRule}
			onRemoveRule={onRemoveRule}
			onSelectedRuleAlertType={onSelectedRuleAlertType}
		/>
	);
};

RuleOnboarding.displayName = 'RuleOnboarding';
RuleOnboarding.defaultProps = {};

export default React.memo(RuleOnboarding);
