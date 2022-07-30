import React from 'react';

import FileFormatView from './FileFormat.view';

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

const FileFormat: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<FileFormatView
			labelInput={props.labelInput}
			selectedFileFormatIndex={props.selectedFileFormatIndex}
			isFileFormatClicked={props.isFileFormatClicked}
			isEditFileFormat={props.isEditFileFormat}
			inputCode={props.inputCode}
			onEditFileFormatButton={props.onEditFileFormatButton}
			onFileFormatButton={props.onFileFormatButton}
			onSelectedFileFormat={props.onSelectedFileFormat}
			onChangeInput={props.onChangeInput}
		/>
	);
};

FileFormat.displayName = 'FileFormat';
FileFormat.defaultProps = {};

export default React.memo(FileFormat);
