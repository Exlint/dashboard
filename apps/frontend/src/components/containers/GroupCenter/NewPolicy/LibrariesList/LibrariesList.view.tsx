import React from 'react';
// Import uniqid from 'uniqid';

import type { ILibrary } from '@/interfaces/library';
import { librariesList } from '@/data/libraries-list';

import Library from './Library';

import classes from './LibrariesList.module.scss';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly searchLibraryInput: string | null;
	readonly selectedTypeFromFilter: string;
	readonly selectedCetegotyFromFilter: string;
	readonly selectedSortByOptionIndex: number | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let filteredLibraries = Object.entries(librariesList);

	if (props.searchLibraryInput !== null) {
		filteredLibraries = Object.entries(librariesList).filter(
			(library) =>
				library[0].includes(props.searchLibraryInput!) ||
				library[0].toLowerCase().includes(props.searchLibraryInput!),
		);
	}

	if (props.selectedTypeFromFilter !== 'All') {
		filteredLibraries = Object.entries(librariesList).filter(
			(library) => library[1].type === props.selectedTypeFromFilter,
		);
	}

	if (props.selectedCetegotyFromFilter !== 'All') {
		filteredLibraries = Object.entries(librariesList).filter(
			(library) => library[1].category === props.selectedCetegotyFromFilter,
		);
	}

	if (props.selectedSortByOptionIndex !== null) {
		if (props.selectedSortByOptionIndex === 1) {
			{
				filteredLibraries = Object.entries(librariesList).sort((a, b) => {
					if (a[0] < b[0]) {
						return 1;
					}

					if (a[0] > b[0]) {
						return -1;
					}

					return 0;
				});
			}
		}
	}

	return (
		<div className={classes['librariesList']}>
			{Object.values(filteredLibraries).map((library, index) => {
				return (
					<Library
						id={library[0]}
						key={index}
						title={library[0]}
						logo={library[1].logo}
						madeBy={library[1].madeBy}
						description={library[1].description}
						type={library[1].type}
						category={library[1].category}
						index={index}
						selectedLibrary={props.selectedLibrary}
						onSelectedLibrary={props.onSelectedLibrary}
						onCancelSelectedLibrary={props.onCancelSelectedLibrary}
					/>
				);
			})}
		</div>
	);
};

LibrariesListView.displayName = 'LibrariesListView';
LibrariesListView.defaultProps = {};

export default React.memo(LibrariesListView);
