import React, { useState } from 'react';
import { IRule } from '@/interfaces/rule';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly selectedRuleAlertTypeIndex: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
	readonly onAddRuleToList: (rule: IRule) => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isBasedCodeConfigurationsClickedState, setIsBasedCodeConfigurationsClickedState] =
		useState<boolean>(false);

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
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onSelectedRuleAlertType={props.onSelectedRuleAlertType}
			onRemoveRule={props.onRemoveRule}
			onAddRuleToList={props.onAddRuleToList}
			onClickBasedCodeConfigurations={onClickBasedCodeConfigurations}
			onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
