import React from 'react';
import EDInputField from '../EDInputField';

import EDConfigurationHeaderAndDescription from '../EDConfigurationHeaderAndDescription';

import classes from './EDString.module.scss';

interface IProps {
	readonly input: string | null;
	readonly title: string | null;
	readonly description: string | null;
	readonly onInputChange: (value: string) => void;
}

const EDStringView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />
			<EDInputField
				className={classes['inputBox']}
				value={props.input}
				placeholder={`Enter ${props.title}`}
				onChange={props.onInputChange}
			/>
		</div>
	);
};

EDStringView.displayName = 'EDStringView';
EDStringView.defaultProps = {};

export default React.memo(EDStringView);
