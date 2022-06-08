import React, { useState } from 'react';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly rulesObject: { [key: string]: string };
	readonly selectedRuleIndex: number | null;
	readonly selectedRuleAlertTypeIndex: number[];
	readonly selectedRulesIndexes: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRuleIndex: () => void;
	readonly onAddRuleIndexToList: (index: number) => void;
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
			rulesObject={props.rulesObject}
			selectedRuleIndex={props.selectedRuleIndex}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			isBasedCodeConfigurationsClicked={isBasedCodeConfigurationsClickedState}
			selectedRulesIndexes={props.selectedRulesIndexes}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onSelectedRuleAlertType={props.onSelectedRuleAlertType}
			onRemoveRuleIndex={props.onRemoveRuleIndex}
			onAddRuleIndexToList={props.onAddRuleIndexToList}
			onClickBasedCodeConfigurations={onClickBasedCodeConfigurations}
			onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
