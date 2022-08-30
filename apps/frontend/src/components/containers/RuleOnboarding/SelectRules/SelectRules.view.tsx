import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import classes from './SelectRules.module.scss';

import Header from './Header';
import RulesList from './RulesList';
import { IPolicySidebar } from '@/interfaces/policy-sidebar';

interface IProps {
	readonly selectedPolicy: IPolicySidebar | null;
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly selectedRule: IRule | null;
	readonly rulesCatagories: string[];
	readonly searchRuleInput: string | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectRule: (_: string) => void;
	readonly onSearchRuleInput: (_: string) => void;
	readonly onSelectedCatagory: (_: number) => void;
	readonly onSelectAutofix: () => void;
}

const SelectRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['leftSideContainer']}>
			<Header
				selectedPolicy={props.selectedPolicy}
				rulesCatagories={props.rulesCatagories}
				searchRuleInput={props.searchRuleInput}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				onSearchRuleInput={props.onSearchRuleInput}
				onSelectedCatagory={props.onSelectedCatagory}
				onSelectAutofix={props.onSelectAutofix}
			/>
			<RulesList
				rulesObject={props.rulesObject}
				selectedRule={props.selectedRule}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				onSelectRule={props.onSelectRule}
			/>
		</div>
	);
};

SelectRulesView.displayName = 'SelectRulesView';
SelectRulesView.defaultProps = {};

export default React.memo(SelectRulesView);
