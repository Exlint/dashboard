import React from 'react';
import { IRule } from '@/interfaces/rule';

import HeaderView from './Header.view';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly onAddRuleToList: (rule: IRule) => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			selectedRule={props.selectedRule}
			selectedRules={props.selectedRules}
			onAddRuleToList={props.onAddRuleToList}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
