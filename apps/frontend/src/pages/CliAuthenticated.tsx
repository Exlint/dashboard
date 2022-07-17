import React from 'react';

import CliAuthenticated from '../components/containers/CliAuthenticated';

interface IProps {}

const CliAuthenticatedPage: React.FC<IProps> = () => {
	return <CliAuthenticated />;
};

CliAuthenticatedPage.displayName = 'CliAuthenticatedPage';
CliAuthenticatedPage.defaultProps = {};

export default CliAuthenticatedPage;
