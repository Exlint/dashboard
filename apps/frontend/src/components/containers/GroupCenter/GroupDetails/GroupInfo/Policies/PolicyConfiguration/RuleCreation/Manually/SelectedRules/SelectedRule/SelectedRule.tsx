import React from 'react';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly ruleIndex: number;
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly ruleAlertType: string | undefined;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onRemoveRuleIndexFromList: (index: number) => void;
	readonly onEditSelectedRule: (index: number) => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRuleView
			ruleIndex={props.ruleIndex}
			ruleName={props.ruleName}
			ruleCatagory={props.ruleCatagory}
			ruleAlertType={props.ruleAlertType}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			onRemoveRuleIndexFromList={props.onRemoveRuleIndexFromList}
			onEditSelectedRule={props.onEditSelectedRule}
		/>
	);
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
