import React from 'react';
import ReactDOM from 'react-dom';

import classes from './EDBackdrop.module.scss';

interface IProps {
	readonly onBackdropClick: () => void;
}

const EDBackdropView: React.FC<IProps> = (props) => {
	const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;

	return ReactDOM.createPortal(
		<div className={classes['backdrop']} onClick={props.onBackdropClick} />,
		backdropRoot,
	);
};

EDBackdropView.displayName = 'EDBackdropView';
EDBackdropView.defaultProps = {};

export default React.memo(EDBackdropView);
