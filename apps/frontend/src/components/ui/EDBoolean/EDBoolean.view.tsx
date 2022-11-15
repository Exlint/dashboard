import React from 'react';

import EDBooleanButton from '@/ui/EDBooleanButton';
import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';

import classes from './EDBoolean.module.scss';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
	readonly isSwitchChecked: boolean | string;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
}

const EDBooleanView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />
			<div className={classes['switchContainer']}>
				<EDBooleanButton
					className={classes['switchContainer__button']}
					checked={props.isSwitchChecked}
					onChange={props.onIsSwitchCheckedChange}
				/>
				<span className={classes['switchContainer__text']}>{props.title}</span>
			</div>
		</div>
	);
};

EDBooleanView.displayName = 'EDBooleanView';
EDBooleanView.defaultProps = {};

export default React.memo(EDBooleanView);
