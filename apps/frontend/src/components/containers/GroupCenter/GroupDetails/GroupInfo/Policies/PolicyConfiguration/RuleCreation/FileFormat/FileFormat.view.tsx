import React from 'react';

import classes from './FileFormat.module.scss';
import Header from './Header';
import InputCodeForm from './InputCodeForm';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly onEditFileFormatButton: () => void;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
}

const FileFormatView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['fileFormat']}>
			<Header
				policyLabelInput={props.policyLabelInput}
				selectedFileFormatIndex={props.selectedFileFormatIndex}
				isFileFormatClicked={props.isFileFormatClicked}
				isEditFileFormat={props.isEditFileFormat}
				onFileFormatButton={props.onFileFormatButton}
				onSelectedFileFormat={props.onSelectedFileFormat}
				onEditFileFormatButton={props.onEditFileFormatButton}
			/>
			<InputCodeForm
				selectedFileFormatIndex={props.selectedFileFormatIndex}
				isEditFileFormat={props.isEditFileFormat}
			/>
		</section>
	);
};

FileFormatView.displayName = 'FileFormatView';
FileFormatView.defaultProps = {};

export default React.memo(FileFormatView);
