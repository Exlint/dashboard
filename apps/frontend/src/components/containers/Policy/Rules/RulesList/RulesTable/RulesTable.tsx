import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { IEnabledRuleFilter } from '../interfaces/rule-filter';
import type { ISortOption } from '../interfaces/rule-sort';
import type { ICategoryOption } from './interfaces/category-option';

import RulesTableView from './RulesTable.view';

interface IProps {
	readonly autofixFilter: boolean;
	readonly serverRules: IGetRulesResponseData['rules'];
	readonly selectedCategoryFilterIndex: number;
	readonly selectedSortIndex: number;
	readonly sortOptions: ISortOption[];
	readonly enabledFilter: IEnabledRuleFilter;
	readonly searchFilter: string | null;
	readonly onAutofixClick: VoidFunction;
	readonly onSelectedCategoryFilterIndexChange: (index: number) => void;
	readonly onSelectedSortIndexChange: (index: number) => void;
	readonly onDisableRule: (ruleId: string) => void;
	readonly onEnableMissingRule: (ruleName: string) => void;
	readonly onEnableExistRule: (ruleId: string) => void;
}

const RulesTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const categoriesOptions = useMemo(() => {
		const transformedCategoires = props.serverRules.reduce<ICategoryOption[]>((final, rule) => {
			const doesCategoryExist = !!final.find((item) => item.value === rule.category);

			if (doesCategoryExist) {
				return final;
			}

			return [...final, { value: rule.category, label: rule.category }];
		}, []);

		return [{ value: 'all', label: t('policy.rulesList.allCategoriesFilter') }, ...transformedCategoires];
	}, [props.serverRules]);

	const filteredRules = useMemo(() => {
		const rules = props.serverRules.filter((rule) => {
			if (
				(props.enabledFilter === 'enabled' && !rule.id) ||
				(props.enabledFilter === 'notEnabled' && rule.id)
			) {
				return false;
			}

			const searchFilterValue = props.searchFilter ?? '';

			const isRuleMatchedBySearch =
				rule.name.includes(searchFilterValue) ||
				rule.description.includes(searchFilterValue) ||
				rule.category.includes(searchFilterValue);

			const isRuleMatchedByAutofix = !props.autofixFilter || rule.hasAutofix === props.autofixFilter;
			const selectedCategory = categoriesOptions[props.selectedCategoryFilterIndex]?.value;
			const isRuleMatchedByCategory = selectedCategory === 'all' || rule.category === selectedCategory;

			return isRuleMatchedBySearch && isRuleMatchedByAutofix && isRuleMatchedByCategory;
		});

		const selectedSortOption = props.sortOptions[props.selectedSortIndex];

		if (selectedSortOption?.value === 'alphabetic') {
			return rules.sort((rule1, rule2) => rule1.name.localeCompare(rule2.name));
		}

		return rules;
	}, [
		props.serverRules,
		props.enabledFilter,
		props.searchFilter,
		props.autofixFilter,
		categoriesOptions,
		props.selectedCategoryFilterIndex,
		props.selectedSortIndex,
	]);

	return (
		<RulesTableView
			autofixFilter={props.autofixFilter}
			rules={filteredRules}
			categoriesOptions={categoriesOptions}
			selectedCategoryFilterIndex={props.selectedCategoryFilterIndex}
			selectedSortIndex={props.selectedSortIndex}
			sortOptions={props.sortOptions}
			onAutofixClick={props.onAutofixClick}
			onSelectedCategoryFilterIndexChange={props.onSelectedCategoryFilterIndexChange}
			onSelectedSortIndexChange={props.onSelectedSortIndexChange}
			onDisableRule={props.onDisableRule}
			onEnableMissingRule={props.onEnableMissingRule}
			onEnableExistRule={props.onEnableExistRule}
		/>
	);
};

RulesTable.displayName = 'RulesTable';
RulesTable.defaultProps = {};

export default React.memo(RulesTable);
