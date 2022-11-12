import React, { useState } from 'react';

import EDStringView from './EDString.view';

interface IProps {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDString: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [inputState, setInputState] = useState<string | null>(null);

	const onInputChange = (value: string) => {
		setInputState(() => value);

		props.onChangeFormConfiguration(props.configName, value);
	};

	return (
		<EDStringView
			input={inputState}
			title={props.title}
			description={props.description}
			onInputChange={onInputChange}
		/>
	);
};

EDString.displayName = 'EDString';
EDString.defaultProps = {};

export default React.memo(EDString);
