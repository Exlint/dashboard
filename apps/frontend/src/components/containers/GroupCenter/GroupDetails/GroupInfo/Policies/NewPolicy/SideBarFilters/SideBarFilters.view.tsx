import React from 'react';

import { types, categories } from '@/data/policiesFilter';

// import { Trans, useTranslation } from 'react-i18next';

import classes from './SideBarFilters.module.scss';

interface IProps {}

const SideBarFiltersView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<div className={classes['sideBarFilters']}>
			<div className={classes['typesContainer']}>
				<span className={classes['typesContainer__title']}>Types</span>
				{types.map((type, index) => (
					<button className={classes['typeButton']} type="button" key={index}>
						<span className={classes['typeButton__type']}>{type}</span>
					</button>
				))}
			</div>
			<div className={classes['categoriesContainer']}>
				<span className={classes['categoriesContainer__title']}>Categories</span>
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
