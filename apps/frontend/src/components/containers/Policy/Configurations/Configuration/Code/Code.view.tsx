import React from 'react';

import EDConfigCode from '@/ui/EDConfigCode';

import type { fileTypeOptions } from './models/file-type';

interface IProps {
	readonly codeInput: string | null;
	readonly isSaveChangesDisabled: boolean;
	readonly fileTypeOptions: typeof fileTypeOptions;
	readonly selectedFileTypeIndex: number;
	readonly isSwitchChecked: boolean | null;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
	readonly onFileTypeSelect: (index: number) => void;
	readonly onCodeInputChange: (value: string) => void;
	readonly onSaveChangesClick: VoidFunction;
}

const CodeView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDConfigCode
			input={props.codeInput}
			isSubmitDisabled={props.isSaveChangesDisabled}
			selectOptions={props.fileTypeOptions}
			selectedOptionIndex={props.selectedFileTypeIndex}
			isSwitchChecked={props.isSwitchChecked}
			onIsSwitchCheckedChange={props.onIsSwitchCheckedChange}
			onSelectedOptionSelect={props.onFileTypeSelect}
			onInputChange={props.onCodeInputChange}
			onSubmit={props.onSaveChangesClick}
		/>
	);
};

CodeView.displayName = 'CodeView';
CodeView.defaultProps = {};

export default React.memo(CodeView);
