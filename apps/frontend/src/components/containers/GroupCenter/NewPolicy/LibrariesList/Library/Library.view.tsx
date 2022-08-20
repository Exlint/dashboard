import React from 'react';
import { useTranslation } from 'react-i18next';

import { LibraryCategory } from '@/models/library-category';
import { LibraryType } from '@/models/library-type';
import type { ILibraryData } from '@/interfaces/libraries';
import logosObject from '@/utils/libraries-logos';

import EDVsvg from '@/ui/EDSvg';

import classes from './Library.module.scss';

interface IProps extends ILibraryData {
	readonly selectedLibrary: string | null;
	readonly isLibrarySelected: boolean;
	readonly onSelectLibrary: (_: string) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibraryView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const libraryNameInLowerCase = props.name.toLocaleLowerCase() as Lowercase<ILibraryData['name']>;

	return (
		<div
			className={classes['library']}
			style={{
				backgroundColor: props.isLibrarySelected ? '#2355A0' : '#fff',
			}}
		>
			<button
				className={classes['innerLibrary']}
				type="button"
				onClick={() => props.onSelectLibrary(props.name)}
			>
				<div className={classes['logoContainer']}>
					<img
						className={classes['logoContainer__logo']}
						src={logosObject[libraryNameInLowerCase]}
						alt="library logo"
					/>
				</div>
				<div className={classes['textContainer']}>
					<span
						className={classes['textContainer__title']}
						style={{ color: props.isLibrarySelected ? '#E7E7E7' : '#7a4df3' }}
					>
						{props.name}
					</span>
					<div className={classes['madeByContainer']}>
						<span
							className={classes['madeByContainer__text']}
							style={{ color: props.isLibrarySelected ? '#EBE5FA' : '#8b8b8b' }}
						>
							{t('groupCenter.newPolicy.librariesList.library.madeBy')}
						</span>
						&nbsp;
						<span
							className={classes['madeByContainer__text']}
							style={{ color: props.isLibrarySelected ? '#EBE5FA' : '#8b8b8b' }}
						>
							{props.author}
						</span>
					</div>
					<span
						className={classes['textContainer__description']}
						style={{ color: props.isLibrarySelected ? '#EBE5FA' : '#8b8b8b' }}
					>
						{props.description}
					</span>
					<div className={classes['typeAndCategory']}>
						<div className={classes['innerType']}>
							{props.category.map((_, index) => (
								<span
									key={index}
									className={classes['innerType__type']}
									style={{ color: props.isLibrarySelected ? '#EBE5FA' : '#bbb8ca' }}
								>
									{LibraryType[index]}
								</span>
							))}
						</div>
						<div className={classes['innerCategory']}>
							{props.category.map((_, index) => (
								<span
									key={index}
									className={classes['innerCategory__category']}
									style={{ color: props.isLibrarySelected ? '#EBE5FA' : '#bbb8ca' }}
								>
									{LibraryCategory[index]}
								</span>
							))}
						</div>
					</div>
				</div>
			</button>

			<button
				className={classes['cancelSelectedLibraryButton']}
				type="button"
				disabled={!props.isLibrarySelected}
				style={{
					visibility: props.isLibrarySelected ? 'visible' : 'hidden',
				}}
				onClick={props.onCancelSelectedLibrary}
			>
				<EDVsvg name="cancel" className={classes['cancelSelectedLibraryButton__icon']} />
			</button>
		</div>
	);
};

LibraryView.displayName = 'LibraryView';
LibraryView.defaultProps = {};

export default React.memo(LibraryView);
