import React from 'react';
import { useTranslation } from 'react-i18next';

import { LibraryCategory } from 'src/models/library-category';
import { LibraryType } from 'src/models/library-type';
import { concatClasses } from '@/utils/component';

import classes from './SideBarFilters.module.scss';

interface IProps {
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectType: (index: number) => void;
	readonly onSelectCategory: (index: number) => void;
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
					<button
						key={index}
						className={classes['typeButton']}
						type="button"
						onClick={() => props.onSelectType(index)}
					>
						<span
							className={concatClasses(
								classes,
								'container',
								props.selectedTypeIndex === index
									? 'typeButton--isSelected'
									: 'typeButton--notSelected',
							)}
						>
							{LibraryType[index]}
						</span>
					</button>
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
					<button
						key={index}
						className={classes['categoryButton']}
						type="button"
						onClick={() => props.onSelectCategory(index)}
					>
						<span
							className={concatClasses(
								classes,
								'container',
								props.selectedCategoryIndex === index
									? 'categoryButton--isSelected'
									: 'categoryButton--notSelected',
							)}
						>
							{LibraryCategory[index]}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

SideBarFiltersView.displayName = 'SideBarFiltersView';
SideBarFiltersView.defaultProps = {};

export default React.memo(SideBarFiltersView);
