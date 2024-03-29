import React from 'react';
import ReactDOM from 'react-dom';

import classes from './EDBackdrop.module.scss';

interface IProps {
	readonly onBackdropClick: VoidFunction;
}

const EDBackdropView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;

	return ReactDOM.createPortal(
		<div className={classes['container']} onClick={props.onBackdropClick} />,
		backdropRoot,
	);
};

EDBackdropView.displayName = 'EDBackdropView';
EDBackdropView.defaultProps = {};

export default React.memo(EDBackdropView);
