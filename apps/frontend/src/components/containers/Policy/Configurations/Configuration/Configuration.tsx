import React from 'react';

import ConfigurationView from './Configuration.view';

interface IProps {}

const Configuration: React.FC<IProps> = () => {
	return <ConfigurationView />;
};

Configuration.displayName = 'Configuration';
Configuration.defaultProps = {};

export default React.memo(Configuration);
