import React from 'react';

import { ILibrary } from '@/interfaces/library';

import RulesListView from './RulesList.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRuleIndex: number | null;
	readonly selectedRulesIndexes: number[];
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectedRuleIndex: (index: number) => void;
}

const RulesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RulesListView
			selectedLibrary={props.selectedLibrary}
			selectedRuleIndex={props.selectedRuleIndex}
			selectedRulesIndexes={props.selectedRulesIndexes}
			selectedCatagoryIndex={props.selectedCatagoryIndex}
			onSelectedRuleIndex={props.onSelectedRuleIndex}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
