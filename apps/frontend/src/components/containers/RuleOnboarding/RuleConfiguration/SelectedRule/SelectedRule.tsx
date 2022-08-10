import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly onRemoveRule: () => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <SelectedRuleView selectedRule={props.selectedRule} onRemoveRule={props.onRemoveRule} />;
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
