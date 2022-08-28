import React from 'react';

import RightSideView from './RightSide.view';

interface IProps {
	readonly onExitButton: () => void;
}

const RightSide: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <RightSideView onExitButton={props.onExitButton} />;
};

RightSide.displayName = 'RightSide';
RightSide.defaultProps = {};

export default React.memo(RightSide);
