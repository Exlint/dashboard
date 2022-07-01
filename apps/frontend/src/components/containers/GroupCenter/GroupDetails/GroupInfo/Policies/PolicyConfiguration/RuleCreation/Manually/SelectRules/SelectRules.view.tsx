import React from 'react';

import { IRule } from '@/interfaces/rule';
import { ILibrary } from '@/interfaces/library';

import classes from './SelectRules.module.scss';

import Header from './Header';
import RulesList from './RulesList';

interface IProps {
	readonly rulesObject: { [key: string]: string } | Record<string, Record<string, unknown>>;
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedCatagoryIndex: number | null;
	readonly isCatagoryClicked: boolean;
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly onSelectedRule: (rule: IRule) => void;
	readonly onSelectCatagoryButton: () => void;
	readonly onSelectedCatagory: (index: number) => void;
}

const SelectRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['leftSideContainer']}>
			<Header
				rulesObject={props.rulesObject}
				policyLabelInput={props.policyLabelInput}
				selectedLibrary={props.selectedLibrary}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				isCatagoryClicked={props.isCatagoryClicked}
				onSelectCatagoryButton={props.onSelectCatagoryButton}
				onSelectedCatagory={props.onSelectedCatagory}
			/>
			<RulesList
				selectedLibrary={props.selectedLibrary}
				selectedRule={props.selectedRule}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				onSelectedRule={props.onSelectedRule}
			/>
		</div>
	);
};

SelectRulesView.displayName = 'SelectRulesView';
SelectRulesView.defaultProps = {};

export default React.memo(SelectRulesView);
