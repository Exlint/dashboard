import React, { type FormEvent } from 'react';

import EDTextCodeView from './EDTextCode.view';

interface IProps {
	readonly input: string | null;
	readonly isSubmitDisabled: boolean;
	readonly onInputChange: (value: string) => void;
	readonly onSubmit: VoidFunction;
}

const EDTextCode: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		props.onSubmit();
	};

	return (
		<EDTextCodeView
			codeInput={props.input}
			isSubmitDisabled={props.isSubmitDisabled}
			onCodeInputChange={props.onInputChange}
			onSubmit={onSubmit}
		/>
	);
};

EDTextCode.displayName = 'EDTextCode';
EDTextCode.defaultProps = {};

export default React.memo(EDTextCode);
