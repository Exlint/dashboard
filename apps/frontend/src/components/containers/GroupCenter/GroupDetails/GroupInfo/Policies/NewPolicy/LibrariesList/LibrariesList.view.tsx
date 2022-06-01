import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import { ILibrary } from '@/interfaces/library';
import { librariesList } from '../../../../../../../../data/librariesList';
import Library from './Library';

import classes from './LibrariesList.module.scss';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibrariesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['librariesList']}>
			{librariesList.map((library, index) => (
				<Library
					key={index}
					logo={library.logo}
					title={library.title}
					madeBy={library.madeBy}
					description={library.description}
					type={library.type}
					category={library.category}
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
