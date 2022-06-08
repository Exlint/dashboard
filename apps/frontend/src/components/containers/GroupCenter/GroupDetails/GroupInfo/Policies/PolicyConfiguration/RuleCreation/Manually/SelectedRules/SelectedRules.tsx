import React from 'react';

import SelectedRulesView from './SelectedRules.view';

interface IProps {
	readonly rulesObject: { [key: string]: string };
	readonly selectedRulesIndexes: number[];
	readonly selectedRuleAlertTypeIndex: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onRemoveRuleIndexFromList: (index: number) => void;
	readonly onEditSelectedRule: (index: number) => void;
}

const SelectedRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRulesView
			rulesObject={props.rulesObject}
			selectedRulesIndexes={props.selectedRulesIndexes}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onRemoveRuleIndexFromList={props.onRemoveRuleIndexFromList}
			onEditSelectedRule={props.onEditSelectedRule}
		/>
	);
};

SelectedRules.displayName = 'SelectedRules';
SelectedRules.defaultProps = {};

export default React.memo(SelectedRules);
