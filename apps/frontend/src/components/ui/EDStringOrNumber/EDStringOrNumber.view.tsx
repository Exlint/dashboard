import React from 'react';
import EDInputField from '../EDInputField';

import EDConfigurationHeaderAndDescription from '../EDConfigurationHeaderAndDescription';

import classes from './EDStringOrNumber.module.scss';

interface IProps {
	readonly type: 'text' | 'number';
	readonly input: string | null;
	readonly title: string | null;
	readonly description: string | null;
	readonly onInputChange: (value: string) => void;
}

const EDStringOrNumberView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const inputClasses = props.type === 'number' ? classes['input--number'] : classes['input--text'];

	return (
		<div className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />
			<EDInputField
				className={classes['inputBox']}
				type={props.type}
				value={props.input}
				placeholder={`Enter ${props.title}`}
				onChange={props.onInputChange}
			/>
		</div>
	);
};

EDStringOrNumberView.displayName = 'EDStringOrNumberView';
EDStringOrNumberView.defaultProps = {};

export default React.memo(EDStringOrNumberView);
