import React from 'react';

import TokenManagement from '@/containers/TokenManagement';

interface IProps {}

const TokenManagementPage: React.FC<IProps> = () => {
	return <TokenManagement />;
};

TokenManagementPage.displayName = 'TokenManagement';

export default TokenManagementPage;
