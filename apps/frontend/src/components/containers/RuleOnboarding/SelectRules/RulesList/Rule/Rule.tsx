import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import RuleView from './Rule.view';

interface IProps {
	readonly key: number;
	readonly ruleName: string;
	readonly ruleCatagory: string | undefined;
	readonly ruleDescription: string;
	readonly hasAutoFix: boolean | undefined;
	readonly selectedRule: ILibraryRule | null;
	readonly onSelectRule: (rule: ILibraryRule) => void;
}

const Rule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RuleView
			key={props.key}
			ruleName={props.ruleName}
			ruleCatagory={props.ruleCatagory}
			ruleDescription={props.ruleDescription}
			hasAutoFix={props.hasAutoFix}
			selectedRule={props.selectedRule}
			onSelectRule={props.onSelectRule}
		/>
	);
};

Rule.displayName = 'Rule';
Rule.defaultProps = {};

export default React.memo(Rule);
