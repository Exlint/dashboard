import type { ILibraryData } from '@exlint.io/common';
import type { PolicyLibrary } from '@prisma/client';
import React from 'react';

import LibrariesListView from './LibrariesList.view';

interface IProps {
	readonly selectedLibrary: PolicyLibrary | null;
	readonly libraries: Omit<ILibraryData, 'rules' | 'configuration'>[];
	readonly onLibrarySelect: (library: PolicyLibrary) => void;
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
