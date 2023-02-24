import React from 'react';

import NotFound from '@/containers/NotFound';
import Page from '@/helpers/Page';

interface IProps {}

const NotFoundPage: React.FC<IProps> = () => {
	return (
		<Page>
			<NotFound />
		</Page>
	);
};

NotFoundPage.displayName = 'NotFoundPage';
NotFoundPage.defaultProps = {};

export default NotFoundPage;
