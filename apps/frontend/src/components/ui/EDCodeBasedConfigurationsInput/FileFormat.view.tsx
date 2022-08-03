import React from 'react';

import classes from './FileFormat.module.scss';
import Header from './Header';
import InputCodeForm from './InputCodeForm';

interface IProps {
	readonly configurationType: string;
	readonly labelInput: string | null;
	readonly isEditFileFormat: boolean;
	readonly inputCode: string;
	readonly onEditFileFormatButton: () => void;
	readonly onChangeInput: (input: string) => void;
}

const FileFormatView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['fileFormat']}>
			<Header
				configurationType={props.configurationType}
				labelInput={props.labelInput}
				isEditFileFormat={props.isEditFileFormat}
				onEditFileFormatButton={props.onEditFileFormatButton}
			/>
			<InputCodeForm
				inputCode={props.inputCode}
				isEditFileFormat={props.isEditFileFormat}
				onChangeInput={props.onChangeInput}
			/>
		</section>
	);
};

FileFormatView.displayName = 'FileFormatView';
FileFormatView.defaultProps = {};

export default React.memo(FileFormatView);
