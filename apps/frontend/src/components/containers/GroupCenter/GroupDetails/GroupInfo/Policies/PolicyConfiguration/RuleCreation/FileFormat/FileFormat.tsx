import React, { useState } from 'react';

import FileFormatView from './FileFormat.view';

interface IProps {
	readonly policyLabelInput: string | null;
}

const FileFormat: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedFileFormatIndexState, setSelectedFileFormatIndexState] = useState<number>(0);
	const [isFileFormatClickedState, setIsFileFormatClickedState] = useState<boolean>(false);
	const [isEditFileFormatState, setIsEditFileFormatState] = useState<boolean>(false);

	const onEditFileFormatButton = () => {
		setIsEditFileFormatState(() => !isEditFileFormatState);
	};

	const onFileFormatButton = () => {
		setIsFileFormatClickedState(() => !isFileFormatClickedState);
	};

	const onSelectedFileFormat = (index: number) => {
		setSelectedFileFormatIndexState(() => index);
		setIsFileFormatClickedState(() => false);
	};

	return (
		<FileFormatView
			policyLabelInput={props.policyLabelInput}
			selectedFileFormatIndex={selectedFileFormatIndexState}
			isFileFormatClicked={isFileFormatClickedState}
			isEditFileFormat={isEditFileFormatState}
			onEditFileFormatButton={onEditFileFormatButton}
			onFileFormatButton={onFileFormatButton}
			onSelectedFileFormat={onSelectedFileFormat}
		/>
	);
};

FileFormat.displayName = 'FileFormat';
FileFormat.defaultProps = {};

export default React.memo(FileFormat);
