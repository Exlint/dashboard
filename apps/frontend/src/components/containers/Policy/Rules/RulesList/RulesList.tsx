import React, { useMemo, useState } from 'react';
import useMeasure from 'react-use-measure';

import styles from '@/styles/_variables.scss';

import type { IEnabledRuleFilter } from './interfaces/rule-filter';

import RulesListView from './RulesList.view';

interface IProps {}

const RulesList: React.FC<IProps> = () => {
	const [rulesContainerRef, { height: rulesContainerHeight }] = useMeasure();

	const rulesCountFetchLimit = useMemo(() => {
		const ruleRowHeight = parseInt(styles['rule-row-height']!);

		return Math.ceil(rulesContainerHeight / ruleRowHeight) * 3;
	}, [rulesContainerHeight]);

	console.log(rulesCountFetchLimit);

	const [enabledFilterState, setEnabledFilterState] = useState<IEnabledRuleFilter>('all');
	const [searchFilterState, setSearchFilterState] = useState<string | null>(null);

	const onSearchFilterChange = (value: string) => setSearchFilterState(() => value);

	const onSelectEnabledFilterClick = (value: IEnabledRuleFilter) => setEnabledFilterState(() => value);

	return (
		<RulesListView
			enabledFilter={enabledFilterState}
			searchFilter={searchFilterState}
			rulesContainerRef={rulesContainerRef}
			onSearchFilterChange={onSearchFilterChange}
			onSelectEnabledFilterClick={onSelectEnabledFilterClick}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
