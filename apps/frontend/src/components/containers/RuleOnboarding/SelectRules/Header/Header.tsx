import React from 'react';

import type { IPolicySidebar } from '@/interfaces/policy-sidebar';

import HeaderView from './Header.view';

interface IProps {
	readonly rulesCatagories: string[];
	readonly selectedPolicy: IPolicySidebar | null;
	readonly selectedCatagoryIndex: number | null;
	readonly searchRuleInput: string | null;
	readonly onSearchRuleInput: (_: string) => void;
	readonly onSelectedCatagory: (index: number) => void;
	readonly onSelectAutofix: () => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			rulesCatagories={props.rulesCatagories}
			selectedPolicy={props.selectedPolicy}
			searchRuleInput={props.searchRuleInput}
			selectedCatagoryIndex={props.selectedCatagoryIndex}
			onSearchRuleInput={props.onSearchRuleInput}
			onSelectedCatagory={props.onSelectedCatagory}
			onSelectAutofix={props.onSelectAutofix}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
