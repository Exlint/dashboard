import React from 'react';

import LibrariesListView from './LibrariesList.view';

interface IProps {
	readonly selectedLibrary: string | null;
	readonly searchLibraryInput: string | null;
	readonly selectedTypeIndex: number;
	readonly selectedCategoryIndex: number;
	readonly selectedSortByOptionIndex: number | null;
	readonly onSelectLibrary: (libraryName: string) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LibrariesListView
			selectedLibrary={props.selectedLibrary}
			searchLibraryInput={props.searchLibraryInput}
			selectedTypeIndex={props.selectedTypeIndex}
			selectedCategoryIndex={props.selectedCategoryIndex}
			selectedSortByOptionIndex={props.selectedSortByOptionIndex}
			onSelectLibrary={props.onSelectLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
		/>
	);
};

LibrariesList.displayName = 'LibrariesList';
LibrariesList.defaultProps = {};

export default React.memo(LibrariesList);
