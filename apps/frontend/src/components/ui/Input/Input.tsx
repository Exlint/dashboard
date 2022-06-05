import React from 'react';

import InputComponentView from './Input.view';

interface IProps {
	readonly placeholder: string;
	readonly type: string;
	readonly value: string | null;
	readonly onChange: (_: string) => void;
}

const InputComponent: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<InputComponentView
			placeholder={props.placeholder}
			type={props.type}
			value={props.value}
			onChange={props.onChange}
		/>
	);
};

InputComponent.displayName = 'InputComponent';
InputComponent.defaultProps = {};

export default React.memo(InputComponent);
