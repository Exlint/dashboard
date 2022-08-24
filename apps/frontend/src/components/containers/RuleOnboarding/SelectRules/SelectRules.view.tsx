import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import classes from './SelectRules.module.scss';

import Header from './Header';
import RulesList from './RulesList';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly libraryName: string;
	readonly libraryLogo: string;
	readonly selectedRule: IRule | null;
	readonly rulesCatagories: string[];
	readonly searchRuleInput: string | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectRule: (_: string) => void;
	readonly onSearchRuleInput: (_: string) => void;
	readonly onSelectedCatagory: (_: number) => void;
}

const SelectRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['leftSideContainer']}>
			<Header
				rulesCatagories={props.rulesCatagories}
				libraryName={props.libraryName}
				libraryLogo={props.libraryLogo}
				searchRuleInput={props.searchRuleInput}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				onSearchRuleInput={props.onSearchRuleInput}
				onSelectedCatagory={props.onSelectedCatagory}
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
