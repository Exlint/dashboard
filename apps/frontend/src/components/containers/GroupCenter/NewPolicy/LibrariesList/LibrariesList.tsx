import React from 'react';

import { ILibrary } from '@/interfaces/library';

import LibrariesListView from './LibrariesList.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LibrariesListView
			selectedLibrary={props.selectedLibrary}
			onSelectedLibrary={props.onSelectedLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
		/>
	);
};

LibrariesList.displayName = 'LibrariesList';
LibrariesList.defaultProps = {};

export default React.memo(LibrariesList);
