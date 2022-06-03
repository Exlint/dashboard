import React from 'react';

import LeftSideView from './LeftSide.view';

interface IProps {}

const LeftSide: React.FC<IProps> = () => {
	return <LeftSideView />;
};

LeftSide.displayName = 'LeftSide';
LeftSide.defaultProps = {};

export default React.memo(LeftSide);
