import React, { useState } from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import SelectRulesView from './SelectRules.view';
import { IPolicySidebar } from '@/interfaces/policy-sidebar';

interface IProps {
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly selectedPolicy: IPolicySidebar | null;
	readonly selectedRule: IRule | null;
	readonly onSelectRule: (_: string) => void;
}

const SelectRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [searchRuleInputState, setSearchRuleInputState] = useState<string | null>(null);
	const [selectedCatagoryIndexState, setSelectedCatagoryIndexState] = useState<number | null>(null);
	const [autofixCheckedState, setAutofixCheckedState] = useState<boolean>(false);

	const rulesCatagories: string[] = [];

	let filteredRulesList = props.rulesObject;

	if (props.rulesObject !== undefined) {
		Object.values(props.rulesObject).map((rule) => {
			if (!rulesCatagories.includes(rule.category!)) {
				rulesCatagories.push(rule.category!);
			}
		});
	}

	if (searchRuleInputState !== null && props.rulesObject) {
		filteredRulesList = Object.keys(props.rulesObject)
			.filter(
				(key) =>
					key.includes(searchRuleInputState) || key.toLowerCase().includes(searchRuleInputState),
			)
			.reduce((cur, key) => {
				return Object.assign(cur, { [key]: props.rulesObject![key] });
			}, {});
	}

	if (selectedCatagoryIndexState !== null && props.rulesObject) {
		filteredRulesList = Object.keys(props.rulesObject)
			.filter(
				(value) =>
					props.rulesObject![value]!.category !== rulesCatagories[selectedCatagoryIndexState],
			)
			.reduce((cur, key) => {
				return Object.assign(cur, { [key]: props.rulesObject![key] });
			}, {});
	}

	if (autofixCheckedState && props.rulesObject) {
		filteredRulesList = Object.keys(props.rulesObject)
			.filter((value) => props.rulesObject![value]!.hasAutoFix === true)
			.reduce((cur, key) => {
				return Object.assign(cur, { [key]: props.rulesObject![key] });
			}, {});
	}

	const onSearchRuleInput = (input: string) => {
		setSearchRuleInputState(() => input);
	};

	const onSelectedCatagory = (index: number) => {
		setSelectedCatagoryIndexState(() => index);
	};

	const onSelectAutofix = () => setAutofixCheckedState((prev) => !prev);

	return (
		<SelectRulesView
			rulesObject={filteredRulesList}
			selectedPolicy={props.selectedPolicy}
			selectedRule={props.selectedRule}
			rulesCatagories={rulesCatagories}
			searchRuleInput={searchRuleInputState}
			selectedCatagoryIndex={selectedCatagoryIndexState}
			onSelectRule={props.onSelectRule}
			onSearchRuleInput={onSearchRuleInput}
			onSelectedCatagory={onSelectedCatagory}
			onSelectAutofix={onSelectAutofix}
		/>
	);
};

SelectRules.displayName = 'SelectRules';
SelectRules.defaultProps = {};

export default React.memo(SelectRules);
