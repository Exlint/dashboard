import React, { useState } from 'react';

import type { IRule } from '@/interfaces/rule';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly selectedPolicy: IPolicySidebar | null;
	readonly policyId: string | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (_: string) => void;
	readonly onUpdateSelectedRulesList: (rule: IRule) => void;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isBasedCodeConfigurationsClickedState, setIsBasedCodeConfigurationsClickedState] =
		useState<boolean>(false);

	const onOpenCodeConfigurationsModal = () => setIsBasedCodeConfigurationsClickedState(() => true);

	const onCloseCodeConfigurationsModal = () => setIsBasedCodeConfigurationsClickedState(() => false);

	return (
		<RuleConfigurationView
			selectedPolicy={props.selectedPolicy}
			policyId={props.policyId}
			selectedRule={props.selectedRule}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			isBasedCodeConfigurationsClicked={isBasedCodeConfigurationsClickedState}
			ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
			isRuleOnUpdate={props.isRuleOnUpdate}
			onSelectedRuleAlertType={props.onSelectedRuleAlertType}
			onRemoveRule={props.onRemoveRule}
			onOpenCodeConfigurationsModal={onOpenCodeConfigurationsModal}
			onCloseCodeConfigurationsModal={onCloseCodeConfigurationsModal}
			onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
			onUpdateSelectedRulesList={props.onUpdateSelectedRulesList}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
