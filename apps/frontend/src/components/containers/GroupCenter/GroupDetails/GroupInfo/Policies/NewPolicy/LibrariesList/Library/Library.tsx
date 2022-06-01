import React from 'react';

import { ILibrary } from '@/interfaces/library';

import LibraryView from './Library.view';

interface IProps extends ILibrary {
	readonly selectedLibrary: ILibrary | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const Library: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LibraryView
			logo={props.logo}
			title={props.title}
			madeBy={props.madeBy}
			description={props.description}
			type={props.type}
			category={props.category}
			index={props.index}
			selectedLibrary={props.selectedLibrary}
			onSelectedLibrary={props.onSelectedLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
		/>
	);
};

Library.displayName = 'Library';
Library.defaultProps = {};

export default React.memo(Library);
