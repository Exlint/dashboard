import React from 'react';

import CliAuthenticated from '@/containers/CliAuthenticated';
import Page from '@/helpers/Page';

interface IProps {}

const CliAuthenticatedPage: React.FC<IProps> = () => {
	return (
		<Page>
			<CliAuthenticated />
		</Page>
	);
};

CliAuthenticatedPage.displayName = 'CliAuthenticatedPage';
CliAuthenticatedPage.defaultProps = {};

export default CliAuthenticatedPage;
