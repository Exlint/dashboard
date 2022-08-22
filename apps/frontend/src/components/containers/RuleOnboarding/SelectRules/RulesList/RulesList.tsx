import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import RulesListView from './RulesList.view';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectRule: (_: string) => void;
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
