import React from 'react';
import { IRule } from '@/interfaces/rule';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly onRemoveRule: () => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <SelectedRuleView selectedRule={props.selectedRule} onRemoveRule={props.onRemoveRule} />;
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
