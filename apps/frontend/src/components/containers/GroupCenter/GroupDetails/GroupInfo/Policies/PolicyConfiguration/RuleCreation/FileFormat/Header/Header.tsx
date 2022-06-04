import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
	readonly onEditFileFormatButton: () => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			policyLabelInput={props.policyLabelInput}
			selectedFileFormatIndex={props.selectedFileFormatIndex}
			isFileFormatClicked={props.isFileFormatClicked}
			isEditFileFormat={props.isEditFileFormat}
			onFileFormatButton={props.onFileFormatButton}
			onSelectedFileFormat={props.onSelectedFileFormat}
			onEditFileFormatButton={props.onEditFileFormatButton}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
