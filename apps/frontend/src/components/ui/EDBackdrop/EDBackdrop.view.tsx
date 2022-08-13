import React from 'react';
import ReactDOM from 'react-dom';

import { concatClasses } from '@/utils/component';

import classes from './EDBackdrop.module.scss';

interface IProps {
	readonly onBackdropClick: () => void;
	readonly isTransparent?: boolean;
}

const EDBackdropView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;

	return ReactDOM.createPortal(
		<div
			className={concatClasses(
				classes,
				'container',
				props.isTransparent === true ? 'container--isTransparent' : 'container--notTransparent',
			)}
			onClick={props.onBackdropClick}
		/>,
		backdropRoot,
	);
};

EDBackdropView.displayName = 'EDBackdropView';
EDBackdropView.defaultProps = {};

export default React.memo(EDBackdropView);
