import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import SelectedRuleView from './SelectedRule.view';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly ruleAlertType: string | undefined;
	readonly onRemoveRule: () => void;
	readonly onEditSelectedRule: (rule: ILibraryRule) => void;
}

const SelectedRule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SelectedRuleView
			selectedRule={props.selectedRule}
			ruleName={props.ruleName}
			ruleCatagory={props.ruleCatagory}
			ruleAlertType={props.ruleAlertType}
			onRemoveRule={props.onRemoveRule}
			onEditSelectedRule={props.onEditSelectedRule}
		/>
	);
};

SelectedRule.displayName = 'SelectedRule';
SelectedRule.defaultProps = {};

export default React.memo(SelectedRule);
