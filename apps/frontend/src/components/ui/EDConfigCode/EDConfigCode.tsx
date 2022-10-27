import React, { type FormEvent } from 'react';

import type { IOption } from './interfaces/option';

import EDConfigCodeView from './EDConfigCode.view';

interface IProps {
	readonly input: string | null;
	readonly selectedOptionIndex: number;
	readonly isSubmitDisabled: boolean;
	readonly selectOptions: IOption[];
	readonly onInputChange: (value: string) => void;
	readonly onSelectedOptionSelect: (index: number) => void;
	readonly onSubmit: VoidFunction;
}

const EDConfigCode: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		props.onSubmit();
	};

	return (
		<EDConfigCodeView
			codeInput={props.input}
			selectedFileTypeIndex={props.selectedOptionIndex}
			isSubmitDisabled={props.isSubmitDisabled}
			selectOptions={props.selectOptions}
			onSelectedFileTypeSelect={props.onSelectedOptionSelect}
			onInputChange={props.onInputChange}
			onSubmit={onSubmit}
		/>
	);
};

EDConfigCode.displayName = 'EDConfigCode';
EDConfigCode.defaultProps = {};

export default React.memo(EDConfigCode);
