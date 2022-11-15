import React from 'react';

import type { IEnabledRuleFilter } from '../interfaces/rule-filter';

import RulesFiltersView from './RulesFilters.view';

interface IProps {
	readonly enabledFilter: IEnabledRuleFilter;
	readonly searchFilter: string | null;
	readonly selectedCount: number;
	readonly onSearchFilterChange: (value: string) => void;
	readonly onSelectEnabledFilterClick: (value: IEnabledRuleFilter) => void;
}

const RulesFilters: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RulesFiltersView
			enabledFilter={props.enabledFilter}
			searchFilter={props.searchFilter}
			selectedCount={props.selectedCount}
			onSearchFilterChange={props.onSearchFilterChange}
			onSelectEnabledFilterClick={props.onSelectEnabledFilterClick}
		/>
	);
};

RulesFilters.displayName = 'RulesFilters';
RulesFilters.defaultProps = {};

export default React.memo(RulesFilters);
