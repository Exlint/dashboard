import React, { useState } from 'react';

import EDStringOrNumberView from './EDStringOrNumber.view';

interface IProps {
	readonly configName: string;
	readonly type: 'string' | 'number';
	readonly title: string | null;
	readonly description: string | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDStringOrNumber: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [inputState, setInputState] = useState<string | null>(null);

	const type = props.type === 'string' ? 'text' : 'number';

	const onInputChange = (value: string) => {
		setInputState(() => value);

		{
			props.type === 'number'
				? props.onChangeFormConfiguration(props.configName, Number(value))
				: props.onChangeFormConfiguration(props.configName, value);
		}
	};

	return (
		<EDStringOrNumberView
			type={type}
			input={inputState}
			title={props.title}
			description={props.description}
			onInputChange={onInputChange}
		/>
	);
};

EDStringOrNumber.displayName = 'EDStringOrNumber';
EDStringOrNumber.defaultProps = {};

export default React.memo(EDStringOrNumber);
