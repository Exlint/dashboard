import React, { useState } from 'react';

import { librariesList } from '@/data/librariesList';
import { ILibrary } from '@/interfaces/library';
import { IRule } from '@/interfaces/rule';

import ManuallyView from './Manually.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
}

const Manually: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedRuleState, setSelectedRuleState] = useState<IRule | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number[]>([-1]);
	const [selectedRulesState, setSelectedRulesState] = useState<IRule[]>([]);
	const [isRuleOnUpdate, setIsRuleOnUpdate] = useState<boolean>(false);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const selectedLibraryName = props.selectedLibrary!.title;

	const rulesObject = librariesList[selectedLibraryName as keyof typeof librariesList].rulesList;

	const onSelectedRule = (rule: IRule) => {
		if (!isRuleOnUpdate) {
			setSelectedRuleAlertTypeIndexState(() => [0]);
			setSelectedRuleState(rule);
		}
	};

	const onSelectedRuleAlertType = (index: number) => {
		setSelectedRuleAlertTypeIndexState(() => [index]);
	};

	const onRemoveRule = () => {
		setSelectedRuleState(null);
		setSelectedRuleAlertTypeIndexState(() => [-1]);
		setIsRuleOnUpdate(false);
	};

	const onAddRuleToList = (rule: IRule) => {
		setSelectedRulesState(() => [...selectedRulesState, rule]);
		setSelectedRuleState(null);
		setSelectedRuleAlertTypeIndexState(() => [-1]);
		setIsRuleOnUpdate(false);
	};

	const onRemoveRuleFromList = (ruleName: string) => {
		setSelectedRulesState(() => selectedRulesState.filter((rule: IRule) => rule.name !== ruleName));
	};

	const onEditSelectedRule = (rule: IRule) => {
		setIsRuleOnUpdate(true);

		setSelectedRuleState(() => rule);
		setSelectedRuleAlertTypeIndexState(() => [0]);
	};

	const onCodeBasedConfigurationsInputChanged = (input: string) =>
		setRuleCodeBasedConfigurationsInputState(() => input);

	return (
		<ManuallyView
			rulesObject={rulesObject}
			policyLabelInput={props.policyLabelInput}
			selectedLibrary={props.selectedLibrary}
			selectedRule={selectedRuleState}
			selectedRuleAlertTypeIndex={selectedRuleAlertTypeIndexState}
			selectedRules={selectedRulesState}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			onSelectedRuleAlertType={onSelectedRuleAlertType}
			onSelectedRule={onSelectedRule}
			onRemoveRule={onRemoveRule}
			onAddRuleToList={onAddRuleToList}
			onRemoveRuleFromList={onRemoveRuleFromList}
			onEditSelectedRule={onEditSelectedRule}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
		/>
	);
};

Manually.displayName = 'Manually';
Manually.defaultProps = {};

export default React.memo(Manually);
