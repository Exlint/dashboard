import React from 'react';

import TokensDetailsView from './TokensDetails.view';

interface IProps {}

const TokensDetails: React.FC<IProps> = () => {
	return <TokensDetailsView />;
};

TokensDetails.displayName = 'TokensDetails';
TokensDetails.defaultProps = {};

export default React.memo(TokensDetails);
