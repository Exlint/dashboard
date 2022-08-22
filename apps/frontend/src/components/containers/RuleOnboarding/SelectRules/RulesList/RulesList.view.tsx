import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import classes from './RulesList.module.scss';

import Rule from './Rule';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectRule: (_: string) => void;
}

const RulesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['rulesList']}>
			{Object.entries(props.rulesObject!).map((rule, index) => (
				<Rule
					key={index}
					ruleName={rule[0]}
					ruleCatagory={rule[1].category}
					ruleDescription={rule[1].description}
					hasAutoFix={rule[1].hasAutoFix}
					selectedRule={props.selectedRule}
					onSelectRule={props.onSelectRule}
				/>
			))}
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
