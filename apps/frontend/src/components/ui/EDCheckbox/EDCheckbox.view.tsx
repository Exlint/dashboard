import React from 'react';
import EDSvg from '../EDSvg';

import classes from './EDCheckbox.module.scss';

interface IProps {
	readonly checked: boolean;
	readonly onClick: VoidFunction;
}

const EDCheckboxView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<button
			className={props.checked ? classes['container'] : classes['container--unchecked']}
			type="button"
			onClick={props.onClick}
		>
			{props.checked && <EDSvg className={classes['container__icon']} name="vCheckboxStroke" />}
		</button>
	);
};

EDCheckboxView.displayName = 'EDCheckboxView';
EDCheckboxView.defaultProps = {};

export default React.memo(EDCheckboxView);
