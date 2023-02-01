import React from 'react';
import { useTranslation } from 'react-i18next';
import type { PolicyLibrary } from '@prisma/client';
import type { ILibraryData } from '@exlint.io/common';

import EDInputField from '@/ui/EDInputField';
import EDSelect from '@/ui/EDSelect';
import type { IOption } from '@/ui/EDSelect/interfaces/option';

import type { ICategoryFilter, ILanguageFilter, ITypeFilter } from './interfaces/type-filters';
import type { ISortOption } from './interfaces/sort-option';
import SideFilters from './SideFilters';
import LibrariesList from './LibrariesList';

import classes from './LibrarySelection.module.scss';

interface IProps {
	readonly libraryFilterInput: string | null;
	readonly selectedSortIndex: number;
	readonly languageFilter: ILanguageFilter;
	readonly typeFilter: ITypeFilter;
	readonly categoryFilter: ICategoryFilter;
	readonly selectedLibrary: PolicyLibrary | null;
	readonly libraries: Omit<ILibraryData, 'rules' | 'configuration'>[];
	readonly onLibraryFilterInputChange: (value: string) => void;
	readonly onSelectSortOption: (index: number) => void;
	readonly onSetLanguageFilter: (value: ILanguageFilter) => void;
	readonly onSetTypeFilter: (value: ITypeFilter) => void;
	readonly onSetCategoryFilter: (value: ICategoryFilter) => void;
	readonly onLibrarySelect: (library: PolicyLibrary) => void;
	readonly onLibraryDeselect: VoidFunction;
}

const LibrarySelectionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const selectOptions: IOption<ISortOption>[] = [
		{
			value: 'Alphabetic',
			label: 'A-Z',
		},
		{
			value: 'Language',
			label: t('newPolicy.librarySelection.languageSort'),
		},
	];

	return (
		<section className={classes['container']}>
			<h5 className={classes['container__header']}>{t('newPolicy.librarySelection.header')}</h5>

			<div className={classes['filtersContainer']}>
				<EDInputField
					className={classes['filtersContainer__input']}
					value={props.libraryFilterInput}
					iconName="search"
					placeholder={t('newPolicy.librarySelection.filterInputPlaceholder')}
					onChange={props.onLibraryFilterInputChange}
				/>

				<EDSelect
					className={classes['filtersContainer__select']}
					options={selectOptions}
					prefix={t('newPolicy.librarySelection.selectPrefix')}
					selectedIndex={props.selectedSortIndex}
					onSelect={props.onSelectSortOption}
				/>
			</div>

			<div className={classes['filtersAndLibraries']}>
				<SideFilters
					languageFilter={props.languageFilter}
					typeFilter={props.typeFilter}
					categoryFilter={props.categoryFilter}
					onSetLanguageFilter={props.onSetLanguageFilter}
					onSetTypeFilter={props.onSetTypeFilter}
					onSetCategoryFilter={props.onSetCategoryFilter}
				/>

				<LibrariesList
					selectedLibrary={props.selectedLibrary}
					libraries={props.libraries}
					onLibrarySelect={props.onLibrarySelect}
					onLibraryDeselect={props.onLibraryDeselect}
				/>
			</div>
		</section>
	);
};

LibrarySelectionView.displayName = 'LibrarySelectionView';
LibrarySelectionView.defaultProps = {};

export default React.memo(LibrarySelectionView);
