import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import React from 'react';
import { useTranslation } from 'react-i18next';

import type { IEnabledRuleFilter } from './interfaces/rule-filter';
import RuleConfiguration from './RuleConfiguration';
import RulesFilters from './RulesFilters';

import classes from './RulesList.module.scss';

interface IProps {
	readonly enabledFilter: IEnabledRuleFilter;
	readonly searchFilter: string | null;
	readonly autofixFilter: boolean;
	readonly rules: IGetRulesResponseData['rules'];
	readonly onSearchFilterChange: (value: string) => void;
	readonly onSelectEnabledFilterClick: (value: IEnabledRuleFilter) => void;
	readonly onAutofixClick: (value: boolean) => void;
}

const RulesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['rulesContainer']}>
				<RulesFilters
					enabledFilter={props.enabledFilter}
					searchFilter={props.searchFilter}
					onSearchFilterChange={props.onSearchFilterChange}
					onSelectEnabledFilterClick={props.onSelectEnabledFilterClick}
				/>

				<div className={classes['rulesTable']}>
					<div className={classes['rulesTableHeader']}>
						<div className={classes['rulesTableFilters']}>
							<span className={classes['rulesTableFilters__text']}>
								{t('policy.rulesList.filters.ruleCategory')}
							</span>
						</div>
					</div>
				</div>
			</div>

			<RuleConfiguration />
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
