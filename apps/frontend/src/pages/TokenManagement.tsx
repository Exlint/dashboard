import React from 'react';

import TokenManagement from '@/containers/TokenManagement';

interface IProps {}

const TokenManagementPage: React.FC<IProps> = () => {
	return <TokenManagement />;
};

TokenManagementPage.displayName = 'TokenManagement';
TokenManagementPage.defaultProps = {};

export default TokenManagementPage;
