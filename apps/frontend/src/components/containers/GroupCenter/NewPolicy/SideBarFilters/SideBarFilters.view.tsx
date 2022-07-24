import React from 'react';
import { useTranslation } from 'react-i18next';

import { types, categories } from '@/data/policies-filter';

import classes from './SideBarFilters.module.scss';

interface IProps {
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectType: (index: number) => void;
	readonly onSelectCategory: (index: number) => void;
}

const SideBarFiltersView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['sideBarFilters']}>
			<div className={classes['typesContainer']}>
				<span className={classes['typesContainer__title']}>
					{t('groupCenter.newPolicy.sideBarFilter.typesTitle')}
				</span>
				{types.map((type, index) => (
					<button className={classes['typeButton']} type="button" key={index}>
						<span className={classes['typeButton__type']}>{type}</span>
					</button>
				))}
			</div>
			<div className={classes['categoriesContainer']}>
				<span className={classes['categoriesContainer__title']}>
					{t('groupCenter.newPolicy.sideBarFilter.categoriesTitle')}
				</span>
				{categories.map((category, index) => (
					<button className={classes['categoryButton']} type="button" key={index}>
						<span className={classes['categoryButton__category']}>{category}</span>
					</button>
				))}
			</div>
		</div>
	);
};

SideBarFiltersView.displayName = 'SideBarFiltersView';
SideBarFiltersView.defaultProps = {};

export default React.memo(SideBarFiltersView);
