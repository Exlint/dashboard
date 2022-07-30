import React from 'react';
import EDSvg from '@/ui/EDSvg';
import { fileFormats } from '@/data/file-formts';

import SelectFromOptions from '@/ui/SelectFromOptions';
import classes from './Header.module.scss';

interface IProps {
	readonly labelInput: string | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
	readonly onEditFileFormatButton: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['header']}>
			<div className={classes['leftSideContainer']}>
				<span className={classes['leftSideContainer__text']}>{props.labelInput}</span>
				&nbsp;
				<span className={classes['leftSideContainer__text']}>Rule Configuration</span>
			</div>
			<div className={classes['rightSideContainer']}>
				<button
					className={classes['editFileFormatButton']}
					type="button"
					onClick={props.onEditFileFormatButton}
				>
					<EDSvg
						className={classes['editFileFormatButton__icon']}
						name={props.isEditFileFormat ? 'unlock' : 'lock'}
					/>
				</button>

				<SelectFromOptions
					componentWidth="100px"
					border="1px solid #8b8b8b"
					selectedOptionIndex={props.selectedFileFormatIndex}
					isShowMoreClicked={props.isFileFormatClicked}
					optionsList={fileFormats}
					onSelectOptionsButton={props.onFileFormatButton}
					onSelectedOption={props.onSelectedFileFormat}
				/>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
