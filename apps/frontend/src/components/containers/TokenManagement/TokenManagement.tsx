import React from 'react';

import TokenManagementView from './TokenManagement.view';

interface IProps {}

const TokenManagement: React.FC<IProps> = () => {
	return <TokenManagementView />;
};

TokenManagement.displayName = 'TokenManagement';
TokenManagement.defaultProps = {};

export default React.memo(TokenManagement);
