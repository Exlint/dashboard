import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';
import EDInputField from '@/ui/EDInputField';

import type { IEnabledRuleFilter } from '../interfaces/rule-filter';

import classes from './RulesFilters.module.scss';

interface IProps {
	readonly enabledFilter: IEnabledRuleFilter;
	readonly searchFilter: string | null;
	readonly onSearchFilterChange: (value: string) => void;
	readonly onSelectEnabledFilterClick: (value: IEnabledRuleFilter) => void;
}

const RulesFiltersView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['enabledFilters']}>
				<button
					className={concatClasses(
						classes,
						'enabledFilters__item',
						props.enabledFilter === 'all' ? 'enabledFilters__item--selected' : null,
					)}
					type="button"
					onClick={() => props.onSelectEnabledFilterClick('all')}
				>
					{t('policy.rulesList.filters.allRules')}
				</button>
				<hr className={classes['enabledFilters__divider']} />
				<button
					className={concatClasses(
						classes,
						'enabledFilters__item',
						props.enabledFilter === 'enabled' ? 'enabledFilters__item--selected' : null,
					)}
					type="button"
					onClick={() => props.onSelectEnabledFilterClick('enabled')}
				>
					{t('policy.rulesList.filters.enabled')}
				</button>
				<hr className={classes['enabledFilters__divider']} />
				<button
					className={concatClasses(
						classes,
						'enabledFilters__item',
						props.enabledFilter === 'notEnabled' ? 'enabledFilters__item--selected' : null,
					)}
					type="button"
					onClick={() => props.onSelectEnabledFilterClick('notEnabled')}
				>
					{t('policy.rulesList.filters.notEnabled')}
				</button>
			</div>

			<EDInputField
				className={classes['container__search']}
				placeholder={t('policy.rulesList.filters.searchPlaceholder')}
				value={props.searchFilter}
				iconName="search"
				onChange={props.onSearchFilterChange}
			/>
		</div>
	);
};

RulesFiltersView.displayName = 'RulesFiltersView';
RulesFiltersView.defaultProps = {};

export default React.memo(RulesFiltersView);
