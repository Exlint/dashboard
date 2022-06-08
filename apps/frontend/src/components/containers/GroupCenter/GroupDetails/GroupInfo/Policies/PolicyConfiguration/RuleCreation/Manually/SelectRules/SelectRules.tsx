import React, { useState } from 'react';

import { ILibrary } from '@/interfaces/library';

import SelectRulesView from './SelectRules.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRuleIndex: number | null;
	readonly selectedRulesIndexes: number[];
	readonly onSelectedRuleIndex: (index: number) => void;
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
			selectedRuleIndex={props.selectedRuleIndex}
			selectedRulesIndexes={props.selectedRulesIndexes}
			onSelectedRuleIndex={props.onSelectedRuleIndex}
			onSelectCatagoryButton={onSelectCatagoryButton}
			onSelectedCatagory={onSelectedCatagory}
		/>
	);
};

SelectRules.displayName = 'SelectRules';
SelectRules.defaultProps = {};

export default React.memo(SelectRules);
