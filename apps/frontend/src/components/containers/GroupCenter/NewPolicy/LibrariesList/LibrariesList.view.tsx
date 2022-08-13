import React from 'react';

import { librariesData } from '@/data/libraries-data';

import Library from './Library';

import classes from './LibrariesList.module.scss';

interface IProps {
	readonly selectedLibrary: string | null;
	readonly searchLibraryInput: string | null;
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly selectedSortByOptionIndex: number | null;
	readonly onSelectLibrary: (libraryName: string) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let filteredLibraries = Object.entries(librariesData);

	if (props.selectedSortByOptionIndex !== null) {
		if (props.selectedSortByOptionIndex === 1) {
			{
				filteredLibraries = Object.entries(librariesData).sort((a, b) => {
					if (a[0] < b[0]) {
						return -1;
					}

					if (a[0] > b[0]) {
						return 1;
					}

					return 0;
				});
			}
		}
	}

	if (props.searchLibraryInput !== null) {
		filteredLibraries = Object.entries(librariesData).filter(
			(library) =>
				library[0].includes(props.searchLibraryInput!) ||
				library[0].toLowerCase().includes(props.searchLibraryInput!),
		);
	}

	if (props.selectedTypeIndex !== -1) {
		filteredLibraries = Object.entries(librariesData).filter((library) =>
			library[1].type.includes(props.selectedTypeIndex),
		);
	}

	if (props.selectedCategoryIndex !== -1) {
		filteredLibraries = Object.entries(librariesData).filter((library) =>
			library[1].category.includes(props.selectedCategoryIndex),
		);
	}

	return (
		<div className={classes['librariesList']}>
			{Object.values(filteredLibraries).map((library) => {
				return (
					<Library
						key={library[0]}
						name={library[1].name}
						author={library[1].author}
						description={library[1].description}
						type={library[1].type}
						category={library[1].category}
						selectedLibrary={props.selectedLibrary}
						onSelectLibrary={props.onSelectLibrary}
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
