import React from 'react';

import { concatDiverseClasses } from '@/utils/component';
import type icons from '@/assets/icons';

import EDSvg from '../EDSvg';

import classes from './EDInputField.module.scss';

interface IProps {
	readonly id?: string;
	readonly className?: string;
	readonly value: string | null;
	readonly type?: 'text' | 'number';
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly disabled?: boolean;
	readonly iconName?: keyof typeof icons;
	readonly onChange: (value: string) => void;
}

const EDInputFieldView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	if (!props.iconName) {
		return (
			<input
				className={concatDiverseClasses(classes['container'], props.className)}
				id={props.id}
				type={props.type ? props.type : 'text'}
				value={props.value ?? ''}
				maxLength={props.maxLength}
				placeholder={props.placeholder}
				disabled={props.disabled}
				onChange={({ currentTarget: { value } }) => props.onChange(value)}
			/>
		);
	}

	return (
		<div id={props.id} className={concatDiverseClasses(classes['inputIconContainer'], props.className)}>
			<EDSvg className={classes['inputIconContainer__icon']} name={props.iconName} />

			<input
				className={classes['inputIconContainer__input']}
				type={props.type ? props.type : 'text'}
				value={props.value ?? ''}
				maxLength={props.maxLength}
				placeholder={props.placeholder}
				disabled={props.disabled}
				onChange={({ currentTarget: { value } }) => props.onChange(value)}
			/>
		</div>
	);
};

EDInputFieldView.displayName = 'EDInputFieldView';
EDInputFieldView.defaultProps = {};

export default React.memo(EDInputFieldView);
