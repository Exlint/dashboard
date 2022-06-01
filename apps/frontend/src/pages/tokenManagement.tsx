import React from 'react';

import TokenManagement from '../components/containers/TokenManagement';
// import Features from '../components/containers/Features';

interface IProps {}

const TokenManagerPage: React.FC<IProps> = () => {
	return <TokenManagement />;
};

TokenManagerPage.displayName = 'tokenManagement';

export default TokenManagerPage;
