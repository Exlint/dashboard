import React from 'react';
import type { NextPage } from 'next';

import PageNotFound from '@/containers/PageNotFound';

const NotFound: NextPage = () => {
	return <PageNotFound />;
};

NotFound.displayName = 'Home';
NotFound.defaultProps = {};

export default NotFound;
