import React from 'react';
import { IRule } from '@/interfaces/rule';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly ruleAlertType: string | undefined;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onRemoveRuleFromList: (ruleName: string) => void;
	readonly onEditSelectedRule: (rule: IRule) => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRuleView
			selectedRule={props.selectedRule}
			ruleName={props.ruleName}
			ruleCatagory={props.ruleCatagory}
			ruleAlertType={props.ruleAlertType}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onRemoveRuleFromList={props.onRemoveRuleFromList}
			onEditSelectedRule={props.onEditSelectedRule}
		/>
	);
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
