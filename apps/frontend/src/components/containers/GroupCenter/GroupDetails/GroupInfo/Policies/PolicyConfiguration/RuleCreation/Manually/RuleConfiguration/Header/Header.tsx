import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly selectedRuleIndex: number | null;
	readonly selectedRulesIndexes: number[];
	readonly onAddRuleIndexToList: (index: number) => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			selectedRuleIndex={props.selectedRuleIndex}
			selectedRulesIndexes={props.selectedRulesIndexes}
			onAddRuleIndexToList={props.onAddRuleIndexToList}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
