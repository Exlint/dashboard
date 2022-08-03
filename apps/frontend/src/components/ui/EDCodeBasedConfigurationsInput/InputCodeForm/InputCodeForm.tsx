import React from 'react';

import InputCodeFormView from './InputCodeForm.view';

interface IProps {
	readonly isEditFileFormat: boolean;
	readonly inputCode: string;
	readonly onChangeInput: (input: string) => void;
}

const InputCodeForm: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<InputCodeFormView
			inputCode={props.inputCode}
			isEditFileFormat={props.isEditFileFormat}
			onChangeInput={props.onChangeInput}
		/>
	);
};

InputCodeForm.displayName = 'InputCodeForm';
InputCodeForm.defaultProps = {};

export default React.memo(InputCodeForm);
