import React from 'react';

import BackdropView from './Backdrop.view';

interface IProps {
	readonly modalChangeHandler: () => void;
}

const Backdrop: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <BackdropView modalChangeHandler={props.modalChangeHandler} />;
};

Backdrop.displayName = 'Backdrop';
Backdrop.defaultProps = {};

export default React.memo(Backdrop);
