import React from 'react';

import RuleView from './Rule.view';

interface IProps {
	readonly key: number;
	readonly ruleName: string;
	readonly ruleDescription: string;
	readonly ruleCatagory: string;
	readonly index: number;
	readonly selectedRuleIndex: number | null;
	readonly onSelectedRuleIndex: (index: number) => void;
}

const Rule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RuleView
			key={props.key}
			ruleName={props.ruleName}
			ruleDescription={props.ruleDescription}
			ruleCatagory={props.ruleCatagory}
			index={props.index}
			selectedRuleIndex={props.selectedRuleIndex}
			onSelectedRuleIndex={props.onSelectedRuleIndex}
		/>
	);
};

Rule.displayName = 'Rule';
Rule.defaultProps = {};

export default React.memo(Rule);
