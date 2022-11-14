import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { Prisma } from '@prisma/client';

import EDSelect from '@/ui/EDSelect';
import EDCheckbox from '@/ui/EDCheckbox';

import type { ICategoryOption, IEnabledRuleFilter } from './interfaces/rule-filter';
import type { ISortOption } from './interfaces/rule-sort';
import RuleConfiguration from './RuleConfiguration';
import RulesFilters from './RulesFilters';
import Rule from './Rule';

import classes from './RulesList.module.scss';

interface IProps {
	readonly enabledFilter: IEnabledRuleFilter;
	readonly searchFilter: string | null;
	readonly autofixFilter: boolean;
	readonly rules: IGetRulesResponseData['rules'];
	readonly selectedCount: number;
	readonly categoriesOptions: ICategoryOption[];
	readonly selectedCategoryFilterIndex: number;
	readonly selectedSortIndex: number;
	readonly sortOptions: ISortOption[];
	readonly selectedRuleConfiguration: Prisma.JsonArray | null;
	readonly onSearchFilterChange: (value: string) => void;
	readonly onSelectEnabledFilterClick: (value: IEnabledRuleFilter) => void;
	readonly onAutofixClick: VoidFunction;
	readonly onSelectedCategoryFilterIndexChange: (index: number) => void;
	readonly onSelectedSortIndexChange: (index: number) => void;
	readonly onDisableRule: (ruleId: string) => void;
	readonly onEnableRule: (ruleName: string) => void;
}

const RulesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

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

				<div className={classes['rulesTable']}>
					<div className={classes['rulesTableHeader']}>
						<div className={classes['rulesTableFilters']}>
							<span className={classes['rulesTableFilters__text']}>
								{t('policy.rulesList.filters.ruleCategory')}
							</span>

							<EDSelect
								wrapperClassName={classes['rulesTableFilters__selectWrapper']}
								className={classes['rulesTableFilters__select']}
								optionsClassName={classes['rulesTableFilters__selectOptions']}
								options={props.categoriesOptions}
								selectedIndex={props.selectedCategoryFilterIndex}
								onSelect={props.onSelectedCategoryFilterIndexChange}
							/>

							<span className={classes['rulesTableFilters__autofixText']}>
								<Trans>🛠</Trans>
								&nbsp;
								{t('policy.rulesList.autofixFilter')}
							</span>

							<EDCheckbox checked={props.autofixFilter} onClick={props.onAutofixClick} />
						</div>

						<EDSelect
							wrapperClassName={classes['rulesTableHeader__sortSelectWrapper']}
							className={classes['rulesTableHeader__sortSelect']}
							optionsClassName={classes['rulesTableHeader__sortSelectOptions']}
							prefix={t('policy.rulesList.sort.prefix')}
							options={props.sortOptions}
							selectedIndex={props.selectedSortIndex}
							onSelect={props.onSelectedSortIndexChange}
						/>
					</div>

					<div className={classes['rulesTableRows']}>
						{props.rules.map((ruleItem, index) => (
							<Rule
								key={index}
								name={ruleItem.name}
								description={ruleItem.description}
								category={ruleItem.category}
								isEnabled={ruleItem.id !== null}
								hasAutofix={ruleItem.hasAutofix}
								onDisableRule={() => ruleItem.id && props.onDisableRule(ruleItem.id)}
								onEnableRule={() => props.onEnableRule(ruleItem.name)}
							/>
						))}
					</div>
				</div>
			</div>

			<RuleConfiguration selectedRuleConfiguration={props.selectedRuleConfiguration} />
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
