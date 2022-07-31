import React from 'react';

import CliAuthenticatedView from './CliAuthenticated.view';

interface IProps {}

const CliAuthenticated: React.FC<IProps> = () => {
	return <CliAuthenticatedView />;
};

CliAuthenticated.displayName = 'CliAuthenticated';
CliAuthenticated.defaultProps = {};

export default React.memo(CliAuthenticated);
