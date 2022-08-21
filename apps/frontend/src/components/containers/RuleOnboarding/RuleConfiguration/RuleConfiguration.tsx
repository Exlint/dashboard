import React, { useState } from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedRule: ILibraryRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const [isBasedCodeConfigurationsClickedState, setIsBasedCodeConfigurationsClickedState] =
		useState<boolean>(false);

	const onCodeBasedConfigurationsInputChanged = (input: string) =>
		setRuleCodeBasedConfigurationsInputState(() => input);

	const onClickBasedCodeConfigurations = () => {
		setIsBasedCodeConfigurationsClickedState(() => !isBasedCodeConfigurationsClickedState);
	};

	return (
		<RuleConfigurationView
			policyId={props.policyId}
			selectedRule={props.selectedRule}
			selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
			isBasedCodeConfigurationsClicked={isBasedCodeConfigurationsClickedState}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			onSelectedRuleAlertType={props.onSelectedRuleAlertType}
			onRemoveRule={props.onRemoveRule}
			onClickBasedCodeConfigurations={onClickBasedCodeConfigurations}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
