import React from 'react';
import { useTranslation } from 'react-i18next';

import logosObject from '@/utils/libraries-logos';
import type { ILibraryName } from '@/interfaces/libraries';
import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import type { ILibrary } from '../interfaces/library';

import classes from './LibrariesList.module.scss';

interface IProps {
	readonly selectedLibrary: ILibraryName | null;
	readonly libraries: ILibrary[];
	readonly onLibrarySelect: (library: ILibraryName) => void;
	readonly onLibraryDeselect: VoidFunction;
}

const LibrariesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			{props.libraries.map((library, index) => {
				const libraryNameLowerCase = library.name.toLowerCase() as keyof typeof logosObject;
				const isSelected = props.selectedLibrary === library.name;

				return (
					<div
						key={index}
						className={classes['libraryItem']}
						onClick={() => props.onLibrarySelect(library.name)}
					>
						<div
							className={concatClasses(
								classes,
								'libraryImgBorder',
								isSelected ? 'libraryImgBorder--selected' : null,
							)}
						>
							<div className={classes['libraryImgContainer']}>
								<img
									className={classes['libraryImgContainer__img']}
									src={logosObject[libraryNameLowerCase]}
									alt={library.name}
								/>
							</div>
						</div>

						<div className={classes['libraryDetails']}>
							{isSelected ? (
								<div className={classes['libraryNameContainer']}>
									<h5 className={classes['libraryNameContainer__name']}>{library.name}</h5>

									<div className={classes['libraryNameAction']}>
										<span className={classes['libraryNameAction__text']}>
											{t('newPolicy.librarySelection.selected')}
										</span>
										<EDSvg
											className={classes['libraryNameAction__icon']}
											name="close"
											onClick={props.onLibraryDeselect}
										/>
									</div>
								</div>
							) : (
								<h5 className={classes['libraryDetails__name']}>{library.name}</h5>
							)}

							<span className={classes['libraryDetails__author']}>{library.author}</span>
							<span className={classes['libraryDetails__description']}>
								{library.description}
							</span>
							<div className={classes['libraryCategorization']}>
								{library.types.map((libraryType, index) => (
									<span key={index} className={classes['libraryCategorization__item']}>
										{libraryType}
									</span>
								))}
								{library.categories.map((libraryCategory, index) => (
									<span key={index} className={classes['libraryCategorization__item']}>
										{libraryCategory}
									</span>
								))}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

LibrariesListView.displayName = 'LibrariesListView';
LibrariesListView.defaultProps = {};

export default React.memo(LibrariesListView);
