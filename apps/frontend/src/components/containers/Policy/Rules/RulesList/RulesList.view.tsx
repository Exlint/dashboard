import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import React from 'react';

import type { IEnabledRuleFilter } from './interfaces/rule-filter';
import RuleConfiguration from './RuleConfiguration';
import RulesFilters from './RulesFilters';
import RulesTable from './RulesTable';

import classes from './RulesList.module.scss';

interface IProps {
	readonly enabledFilter: IEnabledRuleFilter;
	readonly searchFilter: string | null;
	readonly autofixFilter: boolean;
	readonly serverRules: IGetRulesResponseData['rules'];
	readonly selectedCount: number;
	readonly selectedCategoryFilterIndex: number;
	readonly selectedSortIndex: number;
	readonly selectedRuleIndex: number | null;
	readonly onSearchFilterChange: (value: string) => void;
	readonly onSelectEnabledFilterClick: (value: IEnabledRuleFilter) => void;
	readonly onAutofixClick: VoidFunction;
	readonly onSelectedCategoryFilterIndexChange: (index: number) => void;
	readonly onSelectedSortIndexChange: (index: number) => void;
	readonly onDisableRule: (ruleId: string) => void;
	readonly onEnableMissingRule: (ruleName: string) => void;
	readonly onEnableExistRule: (ruleId: string) => void;
}

const RulesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedRuleId =
		props.selectedRuleIndex !== null ? props.serverRules[props.selectedRuleIndex]?.id ?? null : null;

	const selectedRuleName =
		props.selectedRuleIndex !== null ? props.serverRules[props.selectedRuleIndex]?.name ?? null : null;

	const selectedRuleConfiguration =
		props.selectedRuleIndex !== null
			? props.serverRules[props.selectedRuleIndex]?.configuration ?? null
			: null;

	return (
		<div className={classes['container']}>
			<div className={classes['rulesContainer']}>
				<RulesFilters
					enabledFilter={props.enabledFilter}
					searchFilter={props.searchFilter}
					selectedCount={props.selectedCount}
					onSearchFilterChange={props.onSearchFilterChange}
					onSelectEnabledFilterClick={props.onSelectEnabledFilterClick}
				/>

				<RulesTable
					autofixFilter={props.autofixFilter}
					serverRules={props.serverRules}
					selectedCategoryFilterIndex={props.selectedCategoryFilterIndex}
					selectedSortIndex={props.selectedSortIndex}
					enabledFilter={props.enabledFilter}
					searchFilter={props.searchFilter}
					onAutofixClick={props.onAutofixClick}
					onSelectedCategoryFilterIndexChange={props.onSelectedCategoryFilterIndexChange}
					onSelectedSortIndexChange={props.onSelectedSortIndexChange}
					onDisableRule={props.onDisableRule}
					onEnableMissingRule={props.onEnableMissingRule}
					onEnableExistRule={props.onEnableExistRule}
				/>
			</div>

			<RuleConfiguration
				ruleId={selectedRuleId}
				ruleName={selectedRuleName}
				ruleConfiguration={selectedRuleConfiguration}
			/>
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
