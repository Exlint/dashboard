import React from 'react';

import CliAuth from '@/containers/CliAuth';

interface IProps {}

const CliAuthPage: React.FC<IProps> = () => {
	return <CliAuth />;
};

CliAuthPage.displayName = 'CliAuthPage';
CliAuthPage.defaultProps = {};

export default CliAuthPage;
