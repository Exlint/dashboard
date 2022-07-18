import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Backdrop.module.scss';

interface IProps {
	readonly modalChangeHandler: () => void;
}

const BackdropView: React.FC<IProps> = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className={classes['backdrop']} onClick={props.modalChangeHandler} />,
				document.getElementById('backdrop-root') as HTMLElement,
			)}
		</>
	);
};

BackdropView.displayName = 'BackdropView';
BackdropView.defaultProps = {};

export default React.memo(BackdropView);
