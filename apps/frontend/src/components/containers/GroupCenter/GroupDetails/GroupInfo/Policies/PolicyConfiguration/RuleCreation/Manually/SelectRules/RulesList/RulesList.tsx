import React from 'react';

import { ILibrary } from '@/interfaces/library';
import { IRule } from '@/interfaces/rule';

import RulesListView from './RulesList.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRule: IRule | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectedRule: (rule: IRule) => void;
}

const RulesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RulesListView
			selectedLibrary={props.selectedLibrary}
			selectedRule={props.selectedRule}
			selectedCatagoryIndex={props.selectedCatagoryIndex}
			onSelectedRule={props.onSelectedRule}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
