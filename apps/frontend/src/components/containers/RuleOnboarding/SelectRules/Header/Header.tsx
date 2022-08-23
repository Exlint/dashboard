import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly rulesCatagories: string[];
	readonly libraryName: string;
	readonly libraryLogo: string;
	readonly selectedCatagoryIndex: number | null;
	readonly searchRuleInput: string | null;
	readonly onSearchRuleInput: (_: string) => void;
	readonly onSelectedCatagory: (index: number) => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			rulesCatagories={props.rulesCatagories}
			libraryName={props.libraryName}
			libraryLogo={props.libraryLogo}
			searchRuleInput={props.searchRuleInput}
			selectedCatagoryIndex={props.selectedCatagoryIndex}
			onSearchRuleInput={props.onSearchRuleInput}
			onSelectedCatagory={props.onSelectedCatagory}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
