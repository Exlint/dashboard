import React, { useState } from 'react';
import { IRule } from '@/interfaces/rule';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly selectedRuleAlertTypeIndex: number;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [isBasedCodeConfigurationsClickedState, setIsBasedCodeConfigurationsClickedState] =
		useState<boolean>(false);

	const onCodeBasedConfigurationsInputChanged = (input: string) =>
		setRuleCodeBasedConfigurationsInputState(() => input);

	const onClickBasedCodeConfigurations = () => {
		setIsBasedCodeConfigurationsClickedState(() => !isBasedCodeConfigurationsClickedState);
	};

	return (
		<RuleConfigurationView
			policyLabelInput={props.policyLabelInput}
			selectedRule={props.selectedRule}
			selectedRules={props.selectedRules}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			isBasedCodeConfigurationsClicked={isBasedCodeConfigurationsClickedState}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
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
