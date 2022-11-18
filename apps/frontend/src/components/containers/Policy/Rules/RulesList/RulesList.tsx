import type {
	IEnableMissingRuleDto,
	IEnableMissingRuleResponseData,
	IGetRulesResponseData,
} from '@exlint-dashboard/common';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';

import type { IEnabledRuleFilter } from './interfaces/rule-filter';

import RulesListView from './RulesList.view';

interface IProps {}

const RulesList: React.FC<IProps> = () => {
	const navigate = useNavigate();

	const params = useParams<{
		readonly policyId: string;
		readonly ruleId: string;
		readonly groupId: string;
	}>();

	const [rulesState, setRulesState] = useState<IGetRulesResponseData['rules']>([]);
	const [enabledFilterState, setEnabledFilterState] = useState<IEnabledRuleFilter>('all');
	const [searchFilterState, setSearchFilterState] = useState<string | null>(null);
	const [autofixFilterState, setAutofixFilterState] = useState<boolean>(false);
	const [selectedCategoryFilterIndexState, setSelectedCategoryFilterIndexState] = useState<number>(0);
	const [selectedSortIndexState, setSelectedSortIndexState] = useState<number>(0);

	const onSearchFilterChange = (value: string) => setSearchFilterState(() => value);
	const onSelectEnabledFilterClick = (value: IEnabledRuleFilter) => setEnabledFilterState(() => value);
	const onAutofixClick = () => setAutofixFilterState((prev) => !prev);
	const onSelectedSortIndexChange = (index: number) => setSelectedSortIndexState(() => index);

	const onSelectedCategoryFilterIndexChange = (index: number) =>
		setSelectedCategoryFilterIndexState(() => index);

	const selectedCount = useMemo(() => rulesState.filter((rule) => rule.isEnabled).length, [rulesState]);

	const selectedRuleIndex = useMemo(() => {
		const matchingRuleIndex = rulesState.findIndex((rule) => rule.id === params.ruleId);

		return matchingRuleIndex === -1 ? null : matchingRuleIndex;
	}, [params.ruleId, rulesState]);

	useEffect(() => {
		backendApi
			.get<IGetRulesResponseData>(`/user/rules/${params.policyId}`)
			.then((response) => setRulesState(() => response.data.rules));
	}, [backendApi]);

	const changeEnableStatusOfRuleById = (ruleId: string, enabled: boolean) => {
		setRulesState((prev) => {
			const prevArray = [...prev];
			const matchingRule = prevArray.find((rule) => rule.id === ruleId);

			if (!matchingRule) {
				return prevArray;
			}

			matchingRule.isEnabled = enabled;

			return prevArray;
		});
	};

	const onDisableRule = (ruleId: string) => {
		changeEnableStatusOfRuleById(ruleId, false);
		navigate(`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list`);

		backendApi.patch(`/user/rules/disable/${ruleId}`).catch(() => {
			changeEnableStatusOfRuleById(ruleId, true);
			navigate(
				`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list/${ruleId}`,
			);
		});
	};

	const onEnableExistRule = (ruleId: string) => {
		changeEnableStatusOfRuleById(ruleId, true);
		navigate(`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list/${ruleId}`);

		backendApi.patch(`/user/rules/enable/${ruleId}`).catch(() => {
			changeEnableStatusOfRuleById(ruleId, false);
			navigate(`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list`);
		});
	};

	const onEnableMissingRule = (ruleName: string) => {
		setRulesState((prev) => {
			const prevArray = [...prev];
			const matchingRule = prevArray.find((rule) => rule.name === ruleName);

			if (!matchingRule) {
				return prevArray;
			}

			matchingRule.isEnabled = true;

			return prevArray;
		});

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

					return prevArray;
				});

				navigate(
					`/group-center/${params.groupId}/policies/${params.policyId}/rules/rules-list/${response.data.id}`,
				);
			})
			.catch(() => {
				setRulesState((prev) => {
					const prevArray = [...prev];
					const matchingRule = prevArray.find((rule) => rule.name === ruleName);

					if (!matchingRule) {
						return prevArray;
					}

					matchingRule.isEnabled = false;

					return prevArray;
				});
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
			selectedRuleIndex={selectedRuleIndex}
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
