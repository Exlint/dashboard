import React from 'react';

import EDBackdropView from './EDBackdrop.view';

interface IProps {
	readonly onBackdropClick: VoidFunction;
}

const EDBackdrop: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDBackdropView onBackdropClick={props.onBackdropClick} />;
};

EDBackdrop.displayName = 'EDBackdrop';
EDBackdrop.defaultProps = {};

export default React.memo(EDBackdrop);
