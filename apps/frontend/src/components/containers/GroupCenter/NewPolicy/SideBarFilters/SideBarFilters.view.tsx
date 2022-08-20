import React from 'react';
import { useTranslation } from 'react-i18next';

import { LibraryCategory } from '@/models/library-category';
import { LibraryType } from '@/models/library-type';
import { concatClasses } from '@/utils/component';

import classes from './SideBarFilters.module.scss';
import TypesButtons from './TypesButtons';
import CategoriesButtons from './CategoriesButtons';

interface IProps {
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectType: (_: number) => void;
	readonly onSelectCategory: (_: number) => void;
}

const SideBarFiltersView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['sideBarFilters']}>
			<div className={classes['typesContainer']}>
				<span className={classes['typesContainer__title']}>
					{t('groupCenter.newPolicy.sideBarFilter.typesTitle')}
				</span>
				<button
					className={classes['typeButton']}
					type="button"
					onClick={() => props.onSelectType(-1)}
				>
					<span
						className={concatClasses(
							classes,
							'container',
							props.selectedTypeIndex === -1
								? 'typeButton--isSelected'
								: 'typeButton--notSelected',
						)}
					>
						{t('groupCenter.newPolicy.sideBarFilter.allButton')}
					</span>
				</button>
				{(Object.keys(LibraryType) as Array<keyof typeof LibraryType>).map((_, index) => (
					<TypesButtons
						key={index}
						index={index}
						selectedTypeIndex={props.selectedTypeIndex}
						onSelectType={props.onSelectType}
					/>
				))}
			</div>
			<div className={classes['categoriesContainer']}>
				<span className={classes['categoriesContainer__title']}>
					{t('groupCenter.newPolicy.sideBarFilter.categoriesTitle')}
				</span>
				<button
					className={classes['categoryButton']}
					type="button"
					onClick={() => props.onSelectCategory(-1)}
				>
					<span
						className={concatClasses(
							classes,
							'container',
							props.selectedCategoryIndex === -1
								? 'categoryButton--isSelected'
								: 'categoryButton--notSelected',
						)}
					>
						{t('groupCenter.newPolicy.sideBarFilter.allButton')}
					</span>
				</button>

				{(Object.keys(LibraryCategory) as Array<keyof typeof LibraryCategory>).map((_, index) => (
					<CategoriesButtons
						key={index}
						index={index}
						selectedCategoryIndex={props.selectedCategoryIndex}
						onSelectCategory={props.onSelectCategory}
					/>
				))}
			</div>
		</div>
	);
};

SideBarFiltersView.displayName = 'SideBarFiltersView';
SideBarFiltersView.defaultProps = {};

export default React.memo(SideBarFiltersView);
