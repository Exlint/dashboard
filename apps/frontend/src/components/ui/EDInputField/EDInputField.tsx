import React from 'react';

import EDInputFieldView from './EDInputField.view';

interface IProps {
	readonly id?: string;
	readonly className?: string;
	readonly value: string | null;
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly onChange: (value: string) => void;
}

const EDInputField: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDInputFieldView
			id={props.id}
			className={props.className}
			value={props.value}
			maxLength={props.maxLength}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
};

EDInputField.displayName = 'EDInputField';
EDInputField.defaultProps = {};

export default React.memo(EDInputField);
