import React from 'react';

import EDCheckboxView from './EDCheckbox.view';

interface IProps {
	readonly checked: boolean;
	readonly onClick: VoidFunction;
}

const EDCheckbox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDCheckboxView checked={props.checked} onClick={props.onClick} />;
};

EDCheckbox.displayName = 'EDCheckbox';
EDCheckbox.defaultProps = {};

export default React.memo(EDCheckbox);
