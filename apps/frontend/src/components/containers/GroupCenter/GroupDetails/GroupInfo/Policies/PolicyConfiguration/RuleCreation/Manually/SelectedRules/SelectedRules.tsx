import React from 'react';
import { IRule } from '@/interfaces/rule';

import SelectedRulesView from './SelectedRules.view';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly selectedRuleAlertTypeIndex: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onRemoveRuleFromList: (ruleName: string) => void;
	readonly onEditSelectedRule: (rule: IRule) => void;
}

const SelectedRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRulesView
			selectedRule={props.selectedRule}
			selectedRules={props.selectedRules}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onRemoveRuleFromList={props.onRemoveRuleFromList}
			onEditSelectedRule={props.onEditSelectedRule}
		/>
	);
};

SelectedRules.displayName = 'SelectedRules';
SelectedRules.defaultProps = {};

export default React.memo(SelectedRules);
