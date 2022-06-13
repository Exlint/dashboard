import React from 'react';
import { IRule } from '@/interfaces/rule';

import RuleView from './Rule.view';

interface IProps {
	readonly id: string;
	readonly index: number;
	readonly ruleName: string;
	readonly ruleDescription: string;
	readonly ruleCatagory: string;
	readonly selectedRule: IRule | null;
	readonly onSelectedRule: (rule: IRule) => void;
}

const Rule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RuleView
			id={props.id}
			index={props.index}
			ruleName={props.ruleName}
			ruleDescription={props.ruleDescription}
			ruleCatagory={props.ruleCatagory}
			selectedRule={props.selectedRule}
			onSelectedRule={props.onSelectedRule}
		/>
	);
};

Rule.displayName = 'Rule';
Rule.defaultProps = {};

export default React.memo(Rule);
