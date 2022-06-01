/* eslint-disable max-lines */
import React from 'react';
import { ILibrary } from '@/interfaces/library';
import VSvg from '@/ui/VSvg';

// import { Trans, useTranslation } from 'react-i18next';

import tempLibraryLogo from '../../../../../../../../../assets/images/brandLogo.png';

import classes from './Library.module.scss';

interface IProps extends ILibrary {
	readonly selectedLibrary: ILibrary | null;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const LibraryView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let isLibrarySelected = false;

	if (props.selectedLibrary?.index === props.index) {
		isLibrarySelected = true;
	} else {
		isLibrarySelected = false;
	}
	// const { t } = useTranslation();

	return (
		<div
			className={classes['library']}
			key={props.index}
			style={{
				backgroundColor: isLibrarySelected ? '#2355A0' : '#fff',
			}}
		>
			<button
				className={classes['innerLibrary']}
				type="button"
				onClick={() =>
					props.onSelectedLibrary({
						logo: props.logo,
						title: props.title,
						madeBy: props.madeBy,
						description: props.description,
						type: props.type,
						category: props.category,
						index: props.index,
					})
				}
			>
				<img className={classes['innerLibrary__logo']} src={tempLibraryLogo} alt="library logo" />
				<div className={classes['textContainer']}>
					<span
						className={classes['textContainer__title']}
						style={{ color: isLibrarySelected ? '#E7E7E7' : '#7a4df3' }}
					>
						{props.title}
					</span>
					<div className={classes['madeByContainer']}>
						<span
							className={classes['madeByContainer__text']}
							style={{ color: isLibrarySelected ? '#EBE5FA' : '#8b8b8b' }}
						>
							By
						</span>
						&nbsp;
						<span
							className={classes['madeByContainer__text']}
							style={{ color: isLibrarySelected ? '#EBE5FA' : '#8b8b8b' }}
						>
							{props.madeBy}
						</span>
					</div>
					<span
						className={classes['textContainer__description']}
						style={{ color: isLibrarySelected ? '#EBE5FA' : '#8b8b8b' }}
					>
						{props.description}
					</span>
					<div className={classes['typeAndCategory']}>
						<span
							className={classes['typeAndCategory__type']}
							style={{ color: isLibrarySelected ? '#EBE5FA' : '#bbb8ca' }}
						>
							{props.type}
						</span>
						<span
							className={classes['typeAndCategory__category']}
							style={{ color: isLibrarySelected ? '#EBE5FA' : '#bbb8ca' }}
						>
							{props.category}
						</span>
					</div>
				</div>
			</button>

			<button
				className={classes['cancelSelectedLibraryButton']}
				type="button"
				style={{
					display: isLibrarySelected ? 'flex' : 'none',
				}}
				onClick={props.onCancelSelectedLibrary}
			>
				<VSvg name="cancelIcon" className={classes['cancelSelectedLibraryButton__icon']} />
			</button>
		</div>
	);
};

LibraryView.displayName = 'LibraryView';
LibraryView.defaultProps = {};

export default React.memo(LibraryView);
