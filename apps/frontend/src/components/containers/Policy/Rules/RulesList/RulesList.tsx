import type {
	IEnableRuleDto,
	IEnableRuleResponseData,
	IGetRulesResponseData,
} from '@exlint-dashboard/common';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';

import type { ICategoryOption, IEnabledRuleFilter } from './interfaces/rule-filter';
import type { ISortOption } from './interfaces/rule-sort';

import RulesListView from './RulesList.view';

interface IProps {}

const RulesList: React.FC<IProps> = () => {
	const { t } = useTranslation();
	const params = useParams<{ readonly policyId: string; readonly ruleId: string }>();

	const sortOptions: ISortOption[] = [
		{
			value: 'default',
			label: t('policy.rulesList.sort.default'),
		},
		{
			value: 'alphabetic',
			label: t('policy.rulesList.sort.alphabetic'),
		},
	];

	const [enabledFilterState, setEnabledFilterState] = useState<IEnabledRuleFilter>('all');
	const [searchFilterState, setSearchFilterState] = useState<string | null>(null);
	const [autofixFilterState, setAutofixFilterState] = useState<boolean>(false);
	const [rulesState, setRulesState] = useState<IGetRulesResponseData['rules']>([]);
	const [selectedCategoryFilterIndexState, setSelectedCategoryFilterIndexState] = useState<number>(0);
	const [selectedSortIndexState, setSelectedSortIndexState] = useState<number>(0);

	const onSearchFilterChange = (value: string) => setSearchFilterState(() => value);
	const onSelectEnabledFilterClick = (value: IEnabledRuleFilter) => setEnabledFilterState(() => value);
	const onAutofixClick = () => setAutofixFilterState((prev) => !prev);
	const onSelectedSortIndexChange = (index: number) => setSelectedSortIndexState(() => index);

	const onSelectedCategoryFilterIndexChange = (index: number) =>
		setSelectedCategoryFilterIndexState(() => index);

	const categoriesOptions = useMemo(() => {
		const transformedCategoires = rulesState.reduce<ICategoryOption[]>((final, rule) => {
			const doesCategoryExist = !!final.find((item) => item.value === rule.category);

			if (doesCategoryExist) {
				return final;
			}

			return [...final, { value: rule.category, label: rule.category }];
		}, []);

		return [{ value: 'all', label: t('policy.rulesList.allCategoriesFilter') }, ...transformedCategoires];
	}, [rulesState]);

	const filteredRules = useMemo(() => {
		const rules = rulesState.filter((rule) => {
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

			const isRuleMatchedByAutofix = !autofixFilterState || rule.hasAutofix === autofixFilterState;
			const selectedCategory = categoriesOptions[selectedCategoryFilterIndexState]?.value;
			const isRuleMatchedByCategory = selectedCategory === 'all' || rule.category === selectedCategory;

			return isRuleMatchedBySearch && isRuleMatchedByAutofix && isRuleMatchedByCategory;
		});

		const selectedSortOption = sortOptions[selectedSortIndexState];

		if (selectedSortOption?.value === 'alphabetic') {
			return rules.sort((rule1, rule2) => rule1.name.localeCompare(rule2.name));
		}

		return rules;
	}, [
		rulesState,
		enabledFilterState,
		searchFilterState,
		autofixFilterState,
		categoriesOptions,
		selectedCategoryFilterIndexState,
		selectedSortIndexState,
	]);

	const selectedCount = useMemo(() => {
		return rulesState.filter((rule) => rule.id !== null).length;
	}, [rulesState]);

	const selectedRuleConfiguration = useMemo(() => {
		const matchingRule = rulesState.find((rule) => rule.id === params.ruleId);

		return matchingRule?.configuration ?? null;
	}, [params.ruleId, rulesState]);

	useEffect(() => {
		backendApi
			.get<IGetRulesResponseData>(`/user/rules/${params.policyId}`)
			.then((response) => setRulesState(() => response.data.rules));
	}, [backendApi]);

	const onDisableRule = (ruleId: string) => {
		backendApi.delete(`/user/rules/${ruleId}`).then(() => {
			setRulesState((prev) => {
				const prevArray = [...prev];
				const matchingRule = prevArray.find((rule) => rule.id === ruleId);

				if (!matchingRule) {
					return prevArray;
				}

				matchingRule.id = null;
				matchingRule.configuration = null;

				return prevArray;
			});
		});
	};

	const onEnableRule = (ruleName: string) => {
		backendApi
			.post<IEnableRuleResponseData, AxiosResponse<IEnableRuleResponseData>, IEnableRuleDto>(
				`/user/rules/${params.policyId}`,
				{ name: ruleName },
			)
			.then((response) => {
				setRulesState((prev) => {
					const prevArray = [...prev];
					const matchingRule = prevArray.find((rule) => rule.name === ruleName);

					if (!matchingRule) {
						return prevArray;
					}

					matchingRule.id = response.data.id;

					return prevArray;
				});
			});
	};

	return (
		<RulesListView
			enabledFilter={enabledFilterState}
			searchFilter={searchFilterState}
			autofixFilter={autofixFilterState}
			rules={filteredRules}
			selectedCount={selectedCount}
			categoriesOptions={categoriesOptions}
			selectedCategoryFilterIndex={selectedCategoryFilterIndexState}
			selectedSortIndex={selectedSortIndexState}
			sortOptions={sortOptions}
			selectedRuleConfiguration={selectedRuleConfiguration}
			onSearchFilterChange={onSearchFilterChange}
			onSelectEnabledFilterClick={onSelectEnabledFilterClick}
			onAutofixClick={onAutofixClick}
			onSelectedCategoryFilterIndexChange={onSelectedCategoryFilterIndexChange}
			onSelectedSortIndexChange={onSelectedSortIndexChange}
			onDisableRule={onDisableRule}
			onEnableRule={onEnableRule}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
