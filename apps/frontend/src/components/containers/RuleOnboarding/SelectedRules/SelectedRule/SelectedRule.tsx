import React from 'react';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly hasConfig: boolean;
	readonly ruleAlertType: string | undefined;
	readonly onRemoveRule: () => void;
	readonly onEditRule: (_: string) => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRuleView
			ruleName={props.ruleName}
			ruleCatagory={props.ruleCatagory}
			hasConfig={props.hasConfig}
			ruleAlertType={props.ruleAlertType}
			onRemoveRule={props.onRemoveRule}
			onEditRule={props.onEditRule}
		/>
	);
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
