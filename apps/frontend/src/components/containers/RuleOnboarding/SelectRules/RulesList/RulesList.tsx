import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import RulesListView from './RulesList.view';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly selectedRule: ILibraryRule | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectRule: (rule: ILibraryRule) => void;
}

const RulesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RulesListView
			rulesObject={props.rulesObject}
			selectedRule={props.selectedRule}
			selectedCatagoryIndex={props.selectedCatagoryIndex}
			onSelectRule={props.onSelectRule}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
