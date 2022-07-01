import React from 'react';

import { ILibrary } from '@/interfaces/library';

import HeaderView from './Header.view';

interface IProps {
	readonly rulesObject: { [key: string]: string } | Record<string, Record<string, unknown>>;
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedCatagoryIndex: number | null;
	readonly isCatagoryClicked: boolean;
	readonly onSelectCatagoryButton: () => void;
	readonly onSelectedCatagory: (index: number) => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			rulesObject={props.rulesObject}
			policyLabelInput={props.policyLabelInput}
			selectedLibrary={props.selectedLibrary}
			selectedCatagoryIndex={props.selectedCatagoryIndex}
			isCatagoryClicked={props.isCatagoryClicked}
			onSelectCatagoryButton={props.onSelectCatagoryButton}
			onSelectedCatagory={props.onSelectedCatagory}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
