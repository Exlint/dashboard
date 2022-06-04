import React, { useState } from 'react';

import InputCodeFormView from './InputCodeForm.view';

interface IProps {
	readonly selectedFileFormatIndex: number;
	readonly isEditFileFormat: boolean;
}

const InputCodeForm: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [inputCodeState, setInputCodeState] = useState<string>('');

	const onInputCodeChange = (input: string) => setInputCodeState(() => input);

	return (
		<InputCodeFormView
			inputCode={inputCodeState}
			selectedFileFormatIndex={props.selectedFileFormatIndex}
			isEditFileFormat={props.isEditFileFormat}
			onInputCodeChange={onInputCodeChange}
		/>
	);
};

InputCodeForm.displayName = 'InputCodeForm';
InputCodeForm.defaultProps = {};

export default React.memo(InputCodeForm);
