import React, { useState } from 'react';

import { ILibrary } from '@/interfaces/library';

import ManuallyView from './Manually.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
}

const Manually: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedRuleIndexState, setSelectedRuleIndexState] = useState<number | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number[]>([-1]);
	const [selectedRulesIndexesState, setSelectedRulesIndexesState] = useState<number[]>([]);

	const [ruleCodeBasedConfigurationsInputState, setRuleCodeBasedConfigurationsInputState] =
		useState<string>('');

	const onSelectedRuleIndex = (index: number) => {
		if (!selectedRuleIndexState) {
			setSelectedRuleAlertTypeIndexState(() => [0]);
			setSelectedRuleIndexState(() => index);
		}
	};

	const onSelectedRuleAlertType = (index: number) => {
		setSelectedRuleAlertTypeIndexState(() => [index]);
	};

	const onRemoveRuleIndex = () => {
		setSelectedRuleIndexState(() => null);
		setSelectedRuleAlertTypeIndexState(() => [-1]);
	};

	const onAddRuleIndexToList = (index: number) => {
		setSelectedRulesIndexesState(() => [...selectedRulesIndexesState, index]);
		setSelectedRuleIndexState(() => null);
		setSelectedRuleAlertTypeIndexState(() => [-1]);
	};

	const onRemoveRuleIndexFromList = (index: number) => {
		setSelectedRulesIndexesState(() =>
			selectedRulesIndexesState.filter((selectedRuleIndex) => selectedRuleIndex !== index),
		);
	};

	const onEditSelectedRule = (index: number) => {
		if (!selectedRuleIndexState) {
			setSelectedRuleIndexState(() => index);
			setSelectedRuleAlertTypeIndexState(() => [0]);
		}
	};

	const onCodeBasedConfigurationsInputChanged = (input: string) =>
		setRuleCodeBasedConfigurationsInputState(() => input);

	return (
		<ManuallyView
			policyLabelInput={props.policyLabelInput}
			selectedLibrary={props.selectedLibrary}
			selectedRuleIndex={selectedRuleIndexState}
			selectedRuleAlertTypeIndex={selectedRuleAlertTypeIndexState}
			selectedRulesIndexes={selectedRulesIndexesState}
			ruleCodeBasedConfigurationsInput={ruleCodeBasedConfigurationsInputState}
			onSelectedRuleAlertType={onSelectedRuleAlertType}
			onSelectedRuleIndex={onSelectedRuleIndex}
			onRemoveRuleIndex={onRemoveRuleIndex}
			onAddRuleIndexToList={onAddRuleIndexToList}
			onRemoveRuleIndexFromList={onRemoveRuleIndexFromList}
			onEditSelectedRule={onEditSelectedRule}
			onCodeBasedConfigurationsInputChanged={onCodeBasedConfigurationsInputChanged}
		/>
	);
};

Manually.displayName = 'Manually';
Manually.defaultProps = {};

export default React.memo(Manually);
