import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';

import type { IEnabledRuleFilter } from './interfaces/rule-filter';

import RulesListView from './RulesList.view';

interface IProps {}

const RulesList: React.FC<IProps> = () => {
	const params = useParams<{ readonly policyId: string }>();

	const [enabledFilterState, setEnabledFilterState] = useState<IEnabledRuleFilter>('all');
	const [searchFilterState, setSearchFilterState] = useState<string | null>(null);
	const [autofixFilterState, setAutofixFilterState] = useState<boolean>(false);
	const [rulesState, setRulesState] = useState<IGetRulesResponseData['rules']>([]);

	const onSearchFilterChange = (value: string) => setSearchFilterState(() => value);
	const onSelectEnabledFilterClick = (value: IEnabledRuleFilter) => setEnabledFilterState(() => value);
	const onAutofixClick = (value: boolean) => setAutofixFilterState(() => value);

	const filteredRules = useMemo(() => {
		return rulesState.filter((rule) => {
			if (
				(enabledFilterState === 'enabled' && !rule.id) ||
				(enabledFilterState === 'notEnabled' && rule.id)
			) {
				return false;
			}

			const searchFilterValue = searchFilterState ?? '';

			const isRuleMatchedBySearch =
				rule.name.includes(searchFilterValue) ||
				rule.description.includes(searchFilterValue) ||
				rule.category.includes(searchFilterValue);

			const isRuleMatchedByAutofix = rule.hasAutofix === autofixFilterState;

			return isRuleMatchedBySearch && isRuleMatchedByAutofix;
		});
	}, [rulesState, enabledFilterState, searchFilterState, autofixFilterState]);

	useEffect(() => {
		backendApi
			.get<IGetRulesResponseData>(`/user/rules/${params.policyId}`)
			.then((response) => setRulesState(() => response.data.rules));
	}, [backendApi]);

	return (
		<RulesListView
			enabledFilter={enabledFilterState}
			searchFilter={searchFilterState}
			autofixFilter={autofixFilterState}
			rules={filteredRules}
			onSearchFilterChange={onSearchFilterChange}
			onSelectEnabledFilterClick={onSelectEnabledFilterClick}
			onAutofixClick={onAutofixClick}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
