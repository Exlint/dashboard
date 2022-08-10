import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import classes from './SelectRules.module.scss';

import Header from './Header';
import RulesList from './RulesList';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly libraryName: string;
	readonly libraryLogo: string;
	readonly selectedRule: ILibraryRule | null;
	readonly selectedCatagoryIndex: number | null;
	readonly isCatagoryClicked: boolean;
	readonly onSelectRule: (rule: ILibraryRule) => void;
	readonly onSelectCatagoryButton: () => void;
	readonly onSelectedCatagory: (index: number) => void;
}

const SelectRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const rulesCatagories: string[] = [];

	// If (props.rulesObject !== undefined) {
	// 	Props.rulesObject.map((rule) => {
	// 		If (!rulesCatagories.includes(rule.category)) {
	// 			RulesCatagories.push(rule.category);
	// 		}
	// 	});
	// }

	return (
		<div className={classes['leftSideContainer']}>
			<Header
				rulesCatagories={rulesCatagories}
				libraryName={props.libraryName}
				libraryLogo={props.libraryLogo}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				isCatagoryClicked={props.isCatagoryClicked}
				onSelectCatagoryButton={props.onSelectCatagoryButton}
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
