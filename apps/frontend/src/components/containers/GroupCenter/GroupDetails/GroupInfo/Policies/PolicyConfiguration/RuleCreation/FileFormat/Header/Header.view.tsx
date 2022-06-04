import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import VSvg from '@/ui/VSvg';
import { fileFormats } from '@/data/fileFormts';

import classes from './Header.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
	readonly onEditFileFormatButton: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<div className={classes['leftSideContainer']}>
				<span className={classes['leftSideContainer__text']}>{props.policyLabelInput}</span>
				&nbsp;
				<span className={classes['leftSideContainer__text']}>Rule Configuration</span>
			</div>
			<div className={classes['rightSideContainer']}>
				<button
					className={classes['editFileFormatButton']}
					type="button"
					onClick={props.onEditFileFormatButton}
				>
					<VSvg
						className={classes['editFileFormatButton__icon']}
						name={props.isEditFileFormat ? 'unlockIcon' : 'lockIcon'}
					/>
				</button>

				<div className={classes['selectedFormatContainer']}>
					<div
						className={classes['selectedFormatVisible']}
						style={{
							borderRadius: !props.isFileFormatClicked ? '10px' : '10px 10px 0 0',
						}}
					>
						<span className={classes['selectedFormatVisible__text']}>
							{fileFormats[props.selectedFileFormatIndex]}
						</span>
						<button
							className={classes['moreFormatsButton']}
							type="button"
							onClick={props.onFileFormatButton}
						>
							{props.isFileFormatClicked ? (
								<VSvg
									className={classes['moreFormatsButton__arrowRight']}
									name="arrowRight"
								/>
							) : (
								<VSvg className={classes['moreFormatsButton__arrowDown']} name="arrowDown" />
							)}
						</button>
					</div>
					<div
						className={classes['selectedFormatInvisible']}
						style={{ display: props.isFileFormatClicked ? 'flex' : 'none' }}
					>
						{fileFormats.map((fileFormat, index) => (
							<button
								className={classes['selectedFormatInvisible__option']}
								key="index"
								type="button"
								onClick={() => props.onSelectedFileFormat(index)}
							>
								{fileFormat}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
