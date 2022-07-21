import React from 'react';
// Import uniqid from 'uniqid';

import { ILibrary } from '@/interfaces/library';
import { librariesList } from '@/data/libraries-list';

import Library from './Library';

import classes from './LibrariesList.module.scss';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const libraries = Object.keys(librariesList) as (keyof typeof librariesList)[];

	return (
		<div className={classes['librariesList']}>
			{libraries.map((library, index) => (
				<Library
					id="amirs"
					key={index}
					logo={librariesList[library].logo}
					title={librariesList[library].title}
					madeBy={librariesList[library].madeBy}
					description={librariesList[library].description}
					type={librariesList[library].type}
					category={librariesList[library].category}
					index={index}
					selectedLibrary={props.selectedLibrary}
					onSelectedLibrary={props.onSelectedLibrary}
					onCancelSelectedLibrary={props.onCancelSelectedLibrary}
				/>
			))}
		</div>
	);
};

LibrariesListView.displayName = 'LibrariesListView';
LibrariesListView.defaultProps = {};

export default React.memo(LibrariesListView);
