import React, { useState } from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import SelectRulesView from './SelectRules.view';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly libraryName: string;
	readonly libraryLogo: string;
	readonly selectedRule: IRule | null;
	readonly onSelectRule: (_: string) => void;
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
			rulesObject={props.rulesObject}
			libraryName={props.libraryName}
			libraryLogo={props.libraryLogo}
			selectedRule={props.selectedRule}
			selectedCatagoryIndex={selectedCatagoryIndexState}
			isCatagoryClicked={isCatagoryClickedState}
			onSelectRule={props.onSelectRule}
			onSelectCatagoryButton={onSelectCatagoryButton}
			onSelectedCatagory={onSelectedCatagory}
		/>
	);
};

SelectRules.displayName = 'SelectRules';
SelectRules.defaultProps = {};

export default React.memo(SelectRules);
