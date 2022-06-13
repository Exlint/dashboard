import React, { useState } from 'react';

import { IRule } from '@/interfaces/rule';
import { ILibrary } from '@/interfaces/library';

import SelectRulesView from './SelectRules.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly onSelectedRule: (rule: IRule) => void;
}

const SelectRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedCatagoryIndexState, setSelectedCatagoryIndexState] = useState<number | null>(null);
	const [isCatagoryClickedState, setIsCatagoryClickedState] = useState<boolean>(false);

	const onSelectCatagoryButton = () => {
		setIsCatagoryClickedState(() => !isCatagoryClickedState);
	};

	const onSelectedCatagory = (index: number) => {
		setSelectedCatagoryIndexState(() => index);
		setIsCatagoryClickedState(() => false);
	};

	return (
		<SelectRulesView
			policyLabelInput={props.policyLabelInput}
			selectedLibrary={props.selectedLibrary}
			selectedCatagoryIndex={selectedCatagoryIndexState}
			isCatagoryClicked={isCatagoryClickedState}
			selectedRule={props.selectedRule}
			selectedRules={props.selectedRules}
			onSelectedRule={props.onSelectedRule}
			onSelectCatagoryButton={onSelectCatagoryButton}
			onSelectedCatagory={onSelectedCatagory}
		/>
	);
};

SelectRules.displayName = 'SelectRules';
SelectRules.defaultProps = {};

export default React.memo(SelectRules);
