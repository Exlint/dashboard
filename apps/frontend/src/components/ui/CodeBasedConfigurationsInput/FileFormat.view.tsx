import React from 'react';

import classes from './FileFormat.module.scss';
import Header from './Header';
import InputCodeForm from './InputCodeForm';

interface IProps {
	readonly labelInput: string | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly inputCode: string;
	readonly onEditFileFormatButton: () => void;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
	readonly onChangeInput: (input: string) => void;
}

const FileFormatView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['fileFormat']}>
			<Header
				labelInput={props.labelInput}
				selectedFileFormatIndex={props.selectedFileFormatIndex}
				isFileFormatClicked={props.isFileFormatClicked}
				isEditFileFormat={props.isEditFileFormat}
				onFileFormatButton={props.onFileFormatButton}
				onSelectedFileFormat={props.onSelectedFileFormat}
				onEditFileFormatButton={props.onEditFileFormatButton}
			/>
			<InputCodeForm
				inputCode={props.inputCode}
				selectedFileFormatIndex={props.selectedFileFormatIndex}
				isEditFileFormat={props.isEditFileFormat}
				onChangeInput={props.onChangeInput}
			/>
		</section>
	);
};

FileFormatView.displayName = 'FileFormatView';
FileFormatView.defaultProps = {};

export default React.memo(FileFormatView);
