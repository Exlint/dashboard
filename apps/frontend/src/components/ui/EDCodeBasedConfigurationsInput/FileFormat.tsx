import React from 'react';

import FileFormatView from './FileFormat.view';

interface IProps {
	readonly configurationType: string;
	readonly labelInput: string | null;
	readonly isEditFileFormat: boolean;
	readonly inputCode: string;
	readonly onEditFileFormatButton: () => void;
	readonly onChangeInput: (input: string) => void;
}

const FileFormat: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<FileFormatView
			configurationType={props.configurationType}
			labelInput={props.labelInput}
			isEditFileFormat={props.isEditFileFormat}
			inputCode={props.inputCode}
			onEditFileFormatButton={props.onEditFileFormatButton}
			onChangeInput={props.onChangeInput}
		/>
	);
};

FileFormat.displayName = 'FileFormat';
FileFormat.defaultProps = {};

export default React.memo(FileFormat);
