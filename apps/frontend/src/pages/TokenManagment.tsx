import React from 'react';

import TokenManagement from '@/containers/TokenManagement';

interface IProps {}

const TokenManagerPage: React.FC<IProps> = () => {
	return <TokenManagement />;
};

TokenManagerPage.displayName = 'tokenManagement';

export default TokenManagerPage;
