import React from 'react';

import ConfigurationsView from './Configurations.view';

interface IProps {}

const Configurations: React.FC<IProps> = () => {
	return <ConfigurationsView />;
};

Configurations.displayName = 'Configurations';
Configurations.defaultProps = {};

export default React.memo(Configurations);
