import React from 'react';

import PolicyConfiguration from '../components/containers/PolicyConfiguration';

interface IProps {}

const PolicyConfigurationPage: React.FC<IProps> = () => {
	return <PolicyConfiguration />;
};

PolicyConfigurationPage.displayName = 'PolicyConfiguration';
PolicyConfigurationPage.defaultProps = {};

export default PolicyConfigurationPage;
