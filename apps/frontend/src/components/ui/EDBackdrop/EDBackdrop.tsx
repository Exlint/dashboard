import React from 'react';

import EDBackdropView from './EDBackdrop.view';

interface IProps {
	readonly modalChangeHandler: () => void;
}

const EDBackdrop: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDBackdropView modalChangeHandler={props.modalChangeHandler} />;
};

EDBackdrop.displayName = 'EDBackdrop';
EDBackdrop.defaultProps = {};

export default React.memo(EDBackdrop);
