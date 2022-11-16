import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import React from 'react';
import type { Prisma } from '@prisma/client';

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
	readonly selectedRuleConfiguration?: Prisma.JsonArray | null;
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

			<RuleConfiguration selectedRuleConfiguration={props.selectedRuleConfiguration} />
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
