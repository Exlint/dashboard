import React from 'react';

import NotFound from '@/containers/NotFound';

interface IProps {}

const NotFoundPage: React.FC<IProps> = () => {
	return <NotFound />;
};

NotFoundPage.displayName = 'NotFoundPage';
NotFoundPage.defaultProps = {};

export default NotFoundPage;
