import React from 'react';

import ExternalAuthRedirect from '@/containers/ExternalAuthRedirect';

interface IProps {}

const ExternalAuthRedirectPage: React.FC<IProps> = () => {
	return <ExternalAuthRedirect />;
};

ExternalAuthRedirectPage.displayName = 'ExternalAuthRedirect';

export default ExternalAuthRedirectPage;
