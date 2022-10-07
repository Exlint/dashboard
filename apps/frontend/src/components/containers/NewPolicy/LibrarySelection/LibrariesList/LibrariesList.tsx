import React from 'react';

import type { ILibraryName } from '@/interfaces/libraries';

import type { ILibrary } from '../interfaces/library';

import LibrariesListView from './LibrariesList.view';

interface IProps {
	readonly selectedLibrary: ILibraryName | null;
	readonly libraries: ILibrary[];
	readonly onLibrarySelect: (library: ILibraryName) => void;
	readonly onLibraryDeselect: VoidFunction;
}

const LibrariesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LibrariesListView
			selectedLibrary={props.selectedLibrary}
			libraries={props.libraries}
			onLibrarySelect={props.onLibrarySelect}
			onLibraryDeselect={props.onLibraryDeselect}
		/>
	);
};

LibrariesList.displayName = 'LibrariesList';
LibrariesList.defaultProps = {};

export default React.memo(LibrariesList);
