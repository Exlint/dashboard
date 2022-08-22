import React, { useEffect, useState } from 'react';

import type { IRule } from '@/interfaces/rule';

import RuleConfigurationView from './RuleConfiguration.view';
import { ruleAlertTypes } from '@/data/rule-alert-types';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedRuleType = ruleAlertTypes[props.selectedRuleAlertTypeIndex];

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [isBasedCodeConfigurationsClickedState, setIsBasedCodeConfigurationsClickedState] =
		useState<boolean>(false);

	const onCodeBasedConfigurationsInputChanged = (input: string) => {
		setRuleCodeBasedConfigurationsInputState(() => input);
	};

	const onClickBasedCodeConfigurations = () => {
		setIsBasedCodeConfigurationsClickedState(() => !isBasedCodeConfigurationsClickedState);
	};

	useEffect(() => {
		setRuleCodeBasedConfigurationsInputState(
			() => `'${props.selectedRule?.ruleName}': ['${selectedRuleType}',]`,
		);
	}, [props.selectedRule, selectedRuleType]);

	return (
		<RuleConfigurationView
			policyId={props.policyId}
			selectedRule={props.selectedRule}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			isBasedCodeConfigurationsClicked={isBasedCodeConfigurationsClickedState}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			isRuleOnUpdate={props.isRuleOnUpdate}
			onSelectedRuleAlertType={props.onSelectedRuleAlertType}
			onRemoveRule={props.onRemoveRule}
			onClickBasedCodeConfigurations={onClickBasedCodeConfigurations}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
