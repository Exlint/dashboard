import React from 'react';

import RuleAlertTypeView from './RuleAlertType.view';

interface IProps {
	readonly selectedRuleIndex: number | null;
	readonly selectedRuleAlertTypeIndex: number[];
	readonly onSelectedRuleAlertType: (index: number) => void;
}

const RuleAlertType: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RuleAlertTypeView
			selectedRuleIndex={props.selectedRuleIndex}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			onSelectedRuleAlertType={props.onSelectedRuleAlertType}
		/>
	);
};

RuleAlertType.displayName = 'RuleAlertType';
RuleAlertType.defaultProps = {};

export default React.memo(RuleAlertType);
