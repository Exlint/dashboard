import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { IGetRulesResponseData } from '@exlint-dashboard/common';

import EDSelect from '@/ui/EDSelect';
import EDCheckbox from '@/ui/EDCheckbox';

import type { ISortOption } from '../interfaces/rule-sort';
import type { ICategoryOption } from './interfaces/category-option';
import Rule from './Rule';

import classes from './RulesTable.module.scss';

interface IProps {
	readonly autofixFilter: boolean;
	readonly rules: IGetRulesResponseData['rules'];
	readonly categoriesOptions: ICategoryOption[];
	readonly selectedCategoryFilterIndex: number;
	readonly selectedSortIndex: number;
	readonly sortOptions: ISortOption[];
	readonly onAutofixClick: VoidFunction;
	readonly onSelectedCategoryFilterIndexChange: (index: number) => void;
	readonly onSelectedSortIndexChange: (index: number) => void;
	readonly onDisableRule: (ruleId: string) => void;
	readonly onEnableMissingRule: (ruleName: string) => void;
	readonly onEnableExistRule: (ruleId: string) => void;
}

const RulesTableView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
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
						isEnabled={ruleItem.isEnabled}
						hasAutofix={ruleItem.hasAutofix}
						onDisableRule={() => ruleItem.id && props.onDisableRule(ruleItem.id)}
						onEnableRule={() =>
							ruleItem.id
								? props.onEnableExistRule(ruleItem.id)
								: props.onEnableMissingRule(ruleItem.name)
						}
					/>
				))}
			</div>
		</div>
	);
};

RulesTableView.displayName = 'RulesTableView';
RulesTableView.defaultProps = {};

export default React.memo(RulesTableView);
