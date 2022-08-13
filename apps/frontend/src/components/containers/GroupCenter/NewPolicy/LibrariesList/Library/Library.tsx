import React from 'react';

import type { ILibraryData } from '@/interfaces/libraries';

import LibraryView from './Library.view';

interface IProps extends ILibraryData {
	readonly selectedLibrary: string | null;
	readonly onSelectLibrary: (libraryName: string) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const Library: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LibraryView
			name={props.name}
			author={props.author}
			description={props.description}
			type={props.type}
			category={props.category}
			selectedLibrary={props.selectedLibrary}
			onSelectLibrary={props.onSelectLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
		/>
	);
};

Library.displayName = 'Library';
Library.defaultProps = {};

export default React.memo(Library);
