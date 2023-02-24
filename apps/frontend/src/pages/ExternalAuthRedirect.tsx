import React from 'react';

import ExternalAuthRedirect from '@/containers/ExternalAuthRedirect';
import Page from '@/helpers/Page';

interface IProps {}

const ExternalAuthRedirectPage: React.FC<IProps> = () => {
	return (
		<Page>
			<ExternalAuthRedirect />
		</Page>
	);
};

ExternalAuthRedirectPage.displayName = 'ExternalAuthRedirect';
ExternalAuthRedirectPage.defaultProps = {};

export default ExternalAuthRedirectPage;
