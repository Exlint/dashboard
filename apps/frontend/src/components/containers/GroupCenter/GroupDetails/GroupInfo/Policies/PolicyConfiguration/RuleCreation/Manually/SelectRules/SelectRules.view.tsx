import React from 'react';

import { ILibrary } from '@/interfaces/library';
import classes from './SelectRules.module.scss';

import Header from './Header';
import RulesList from './RulesList';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedCatagoryIndex: number | null;
	readonly isCatagoryClicked: boolean;
	readonly selectedRuleIndex: number | null;
	readonly selectedRulesIndexes: number[];
	readonly onSelectedRuleIndex: (index: number) => void;
	readonly onSelectCatagoryButton: () => void;
	readonly onSelectedCatagory: (index: number) => void;
}

const SelectRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['leftSideContainer']}>
			<Header
				policyLabelInput={props.policyLabelInput}
				selectedLibrary={props.selectedLibrary}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				isCatagoryClicked={props.isCatagoryClicked}
				onSelectCatagoryButton={props.onSelectCatagoryButton}
				onSelectedCatagory={props.onSelectedCatagory}
			/>
			<RulesList
				selectedLibrary={props.selectedLibrary}
				selectedRuleIndex={props.selectedRuleIndex}
				selectedRulesIndexes={props.selectedRulesIndexes}
				selectedCatagoryIndex={props.selectedCatagoryIndex}
				onSelectedRuleIndex={props.onSelectedRuleIndex}
			/>
		</div>
	);
};

SelectRulesView.displayName = 'SelectRulesView';
SelectRulesView.defaultProps = {};

export default React.memo(SelectRulesView);
