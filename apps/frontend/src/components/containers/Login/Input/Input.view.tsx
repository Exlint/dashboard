import React from 'react';

import classes from './Input.module.scss';

interface IProps {
	readonly placeholder: string;
	readonly type: string;
	readonly value: string | null;
	readonly onChange: (_: string) => void;
}

const InputComponentView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<input
			className={classes['input']}
			placeholder={props.placeholder}
			type={props.type}
			value={props.value ?? ''}
			onChange={({ currentTarget: { value } }) => props.onChange(value)}
		/>
	);
};

InputComponentView.displayName = 'InputComponentView';
InputComponentView.defaultProps = {};

export default React.memo(InputComponentView);
