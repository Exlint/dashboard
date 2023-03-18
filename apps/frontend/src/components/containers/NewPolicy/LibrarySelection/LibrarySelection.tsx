import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import type { PolicyLibrary } from '@prisma/client';
import type { IGetLibrariesResponseData, ILibraryData } from '@exlint.io/common';

import BackendService from '@/services/backend';

import type { ICategoryFilter, ILanguageFilter, ITypeFilter } from './interfaces/type-filters';

import LibrarySelectionView from './LibrarySelection.view';

interface IProps {
	readonly selectedLibrary: PolicyLibrary | null;
	readonly onLibrarySelect: (library: PolicyLibrary | null) => void;
}

const LibrarySelection: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [libraryFilterInputState, setLibraryFilterInputState] = useState<string | null>(null);
	const [selectedSortIndexState, setSelectedSortIndexState] = useState<number>(0);
	const [languageFilterState, setLanguageFilterState] = useState<ILanguageFilter>('All');
	const [typeFilterState, setTypeFilterState] = useState<ITypeFilter>('All');
	const [categoryFilterState, setCategoryFilterState] = useState<ICategoryFilter>('All');
	const [librariesState, setLibrariesState] = useState<Omit<ILibraryData, 'rules' | 'configuration'>[]>([]);

	const [filteredLibrariesState, setFilteredLibrariesState] = useState<
		Omit<ILibraryData, 'rules' | 'configuration'>[]
	>([]);

	const params = useParams<{ readonly complianceId: string }>();

	useEffect(() => {
		BackendService.get<IGetLibrariesResponseData>(
			`/user/inline-policies/libraries/${params.complianceId}`,
		).then((responseData) => {
			setLibrariesState(() => responseData.libraries);
			setFilteredLibrariesState(() => responseData.libraries);
		});
	}, [params.complianceId]);

	useEffect(() => {
		setFilteredLibrariesState(() => {
			const lowerCaseFilter = libraryFilterInputState?.toLowerCase();

			return librariesState
				.filter((library) => {
					const isMatchingByInputFilter =
						lowerCaseFilter === undefined ||
						lowerCaseFilter === '' ||
						library.name.toLowerCase().includes(lowerCaseFilter) ||
						library.description.toLowerCase().includes(lowerCaseFilter) ||
						library.categories.some((category) =>
							category.toLowerCase().includes(lowerCaseFilter),
						);

					const isMatchingByLanguageFilter =
						languageFilterState === 'All' || languageFilterState === library.language;

					const isMatchingTypesFilter =
						typeFilterState === 'All' || library.types.includes(typeFilterState);

					const isMatchingCategoriesFilter =
						categoryFilterState === 'All' || library.categories.includes(categoryFilterState);

					return (
						isMatchingByLanguageFilter &&
						isMatchingByInputFilter &&
						isMatchingTypesFilter &&
						isMatchingCategoriesFilter
					);
				})
				.sort((lib1, lib2) => {
					if (selectedSortIndexState === 0) {
						return lib1.name.localeCompare(lib2.name);
					} else {
						return lib1.language.localeCompare(lib2.language);
					}
				});
		});
	}, [
		libraryFilterInputState,
		languageFilterState,
		typeFilterState,
		categoryFilterState,
		selectedSortIndexState,
	]);

	const onLibraryDeselect = () => props.onLibrarySelect(null);

	const onLibraryFilterInputChange = (value: string) => setLibraryFilterInputState(() => value);
	const onSelectSortOption = (index: number) => setSelectedSortIndexState(() => index);
	const onSetLanguageFilter = (value: ILanguageFilter) => setLanguageFilterState(() => value);
	const onSetTypeFilter = (value: ITypeFilter) => setTypeFilterState(() => value);
	const onSetCategoryFilter = (value: ICategoryFilter) => setCategoryFilterState(() => value);

	return (
		<LibrarySelectionView
			libraryFilterInput={libraryFilterInputState}
			selectedSortIndex={selectedSortIndexState}
			languageFilter={languageFilterState}
			typeFilter={typeFilterState}
			categoryFilter={categoryFilterState}
			selectedLibrary={props.selectedLibrary}
			libraries={filteredLibrariesState}
			onLibrarySelect={props.onLibrarySelect}
			onLibraryDeselect={onLibraryDeselect}
			onLibraryFilterInputChange={onLibraryFilterInputChange}
			onSelectSortOption={onSelectSortOption}
			onSetLanguageFilter={onSetLanguageFilter}
			onSetTypeFilter={onSetTypeFilter}
			onSetCategoryFilter={onSetCategoryFilter}
		/>
	);
};

LibrarySelection.displayName = 'LibrarySelection';
LibrarySelection.defaultProps = {};

export default React.memo(LibrarySelection);
