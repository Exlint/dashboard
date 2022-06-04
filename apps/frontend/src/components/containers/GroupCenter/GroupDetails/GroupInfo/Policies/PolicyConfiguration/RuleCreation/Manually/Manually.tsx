import React from 'react';

import ManuallyView from './Manually.view';

interface IProps {}

const Manually: React.FC<IProps> = () => {
	return <ManuallyView />;
};

Manually.displayName = 'Manually';
Manually.defaultProps = {};

export default React.memo(Manually);
