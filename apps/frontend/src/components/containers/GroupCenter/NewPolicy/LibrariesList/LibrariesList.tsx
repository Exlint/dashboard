import React from 'react';

import { ILibrary } from '@/interfaces/library';

import LibrariesListView from './LibrariesList.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly searchLibraryInput: string | null;
	readonly selectedTypeFromFilter: string;
	readonly selectedCetegotyFromFilter: string;
	readonly selectedSortByOptionIndex: number | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LibrariesListView
			selectedLibrary={props.selectedLibrary}
			searchLibraryInput={props.searchLibraryInput}
			selectedTypeFromFilter={props.selectedTypeFromFilter}
			selectedCetegotyFromFilter={props.selectedCetegotyFromFilter}
			selectedSortByOptionIndex={props.selectedSortByOptionIndex}
			onSelectedLibrary={props.onSelectedLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
		/>
	);
};

LibrariesList.displayName = 'LibrariesList';
LibrariesList.defaultProps = {};

export default React.memo(LibrariesList);
