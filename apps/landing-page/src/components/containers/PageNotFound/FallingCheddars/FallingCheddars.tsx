import React from 'react';

import FallingCheddarsView from './FallingCheddars.view';

interface IProps {}

const FallingCheddars: React.FC<IProps> = () => {
	return <FallingCheddarsView />;
};

FallingCheddars.displayName = 'FallingCheddars';
FallingCheddars.defaultProps = {};

export default React.memo(FallingCheddars);
