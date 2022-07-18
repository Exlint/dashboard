import React from 'react';
import ReactDOM from 'react-dom';

import classes from './EDBackdrop.module.scss';

interface IProps {
	readonly modalChangeHandler: () => void;
}

const EDBackdropView: React.FC<IProps> = (props) => {
	return ReactDOM.createPortal(
		<div className={classes['backdrop']} onClick={props.modalChangeHandler} />,
		document.getElementById('backdrop-root') as HTMLElement,
	);
};

EDBackdropView.displayName = 'EDBackdropView';
EDBackdropView.defaultProps = {};

export default React.memo(EDBackdropView);
