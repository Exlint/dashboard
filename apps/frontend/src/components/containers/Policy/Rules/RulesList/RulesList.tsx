import type {
	IEnableMissingRuleDto,
	IEnableMissingRuleResponseData,
	IGetRulesResponseData,
} from '@exlint-dashboard/common';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';

import type { IEnabledRuleFilter } from './interfaces/rule-filter';
import type { ISortOption } from './interfaces/rule-sort';

import RulesListView from './RulesList.view';

interface IProps {}

const RulesList: React.FC<IProps> = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const params = useParams<{
		readonly policyId: string;
		readonly ruleId: string;
		readonly groupId: string;
	}>();

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

	const selectedCount = useMemo(() => rulesState.filter((rule) => rule.isEnabled).length, [rulesState]);

	const selectedRuleConfiguration = useMemo(() => {
		const matchingRule = rulesState.find((rule) => rule.id === params.ruleId);

		if (!matchingRule) {
			return undefined;
		}

		return matchingRule.id ? matchingRule.configuration : undefined;
	}, [params.ruleId, rulesState]);

	useEffect(() => {
		backendApi
			.get<IGetRulesResponseData>(`/user/rules/${params.policyId}`)
			.then((response) => setRulesState(() => response.data.rules));
	}, [backendApi]);

	const onDisableRule = (ruleId: string) => {
		backendApi.patch(`/user/rules/disable/${ruleId}`).then(() => {
			setRulesState((prev) => {
				const prevArray = [...prev];
				const matchingRule = prevArray.find((rule) => rule.id === ruleId);

				if (!matchingRule) {
					return prevArray;
				}

				matchingRule.isEnabled = false;

				return prevArray;
			});
		});
	};

	const onEnableMissingRule = (ruleName: string) => {
		backendApi
			.post<
				IEnableMissingRuleResponseData,
				AxiosResponse<IEnableMissingRuleResponseData>,
				IEnableMissingRuleDto
			>(`/user/rules/enable/${params.policyId}`, { name: ruleName })
			.then((response) => {
				setRulesState((prev) => {
					const prevArray = [...prev];
					const matchingRule = prevArray.find((rule) => rule.name === ruleName);

					if (!matchingRule) {
						return prevArray;
					}

					matchingRule.id = response.data.id;
					matchingRule.isEnabled = true;

					return prevArray;
				});

				navigate(
					`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list/${response.data.id}`,
				);
			});
	};

	const onEnableExistRule = (ruleId: string) => {
		backendApi.patch(`/user/rules/enable/${ruleId}`).then(() => {
			setRulesState((prev) => {
				const prevArray = [...prev];
				const matchingRule = prevArray.find((rule) => rule.id === ruleId);

				if (!matchingRule) {
					return prevArray;
				}

				matchingRule.isEnabled = true;

				return prevArray;
			});

			navigate(
				`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list/${ruleId}`,
			);
		});
	};

	return (
		<RulesListView
			enabledFilter={enabledFilterState}
			searchFilter={searchFilterState}
			autofixFilter={autofixFilterState}
			serverRules={rulesState}
			selectedCount={selectedCount}
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
			onEnableMissingRule={onEnableMissingRule}
			onEnableExistRule={onEnableExistRule}
		/>
	);
};

RulesList.displayName = 'RulesList';
RulesList.defaultProps = {};

export default React.memo(RulesList);
