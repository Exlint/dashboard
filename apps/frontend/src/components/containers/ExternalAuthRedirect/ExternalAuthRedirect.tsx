import React from 'react';

import ExternalAuthRedirectView from './ExternalAuthRedirect.view';

interface IProps {}

const ExternalAuthRedirect: React.FC<IProps> = () => {
	return <ExternalAuthRedirectView />;
};

ExternalAuthRedirect.displayName = 'ExternalAuthRedirect';
ExternalAuthRedirect.defaultProps = {};

export default React.memo(ExternalAuthRedirect);
