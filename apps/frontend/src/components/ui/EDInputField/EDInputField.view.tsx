import React from 'react';

import { concatDiverseClasses } from '@/utils/component';

import classes from './EDInputField.module.scss';

interface IProps {
	readonly id?: string;
	readonly className?: string;
	readonly value: string | null;
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly onChange: (value: string) => void;
}

const EDInputFieldView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<input
			className={concatDiverseClasses(classes['container'], props.className)}
			id={props.id}
			type="text"
			value={props.value ?? ''}
			maxLength={props.maxLength}
			placeholder={props.placeholder}
			onChange={({ currentTarget: { value } }) => props.onChange(value)}
		/>
	);
};

EDInputFieldView.displayName = 'EDInputFieldView';
EDInputFieldView.defaultProps = {};

export default React.memo(EDInputFieldView);
