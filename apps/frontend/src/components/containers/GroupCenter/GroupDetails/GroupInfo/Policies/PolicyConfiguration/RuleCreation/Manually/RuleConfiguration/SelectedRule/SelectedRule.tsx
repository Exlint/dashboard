import React from 'react';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly selectedRuleIndex: number | null;
	readonly rulesObject: { [key: string]: string };
	readonly onRemoveRuleIndex: () => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRuleView
			selectedRuleIndex={props.selectedRuleIndex}
			rulesObject={props.rulesObject}
			onRemoveRuleIndex={props.onRemoveRuleIndex}
		/>
	);
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
