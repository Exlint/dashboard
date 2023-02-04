import React from 'react';

import PageNotFoundView from './PageNotFound.view';

interface IProps {}

const PageNotFound: React.FC<IProps> = () => {
	return <PageNotFoundView />;
};

PageNotFound.displayName = 'PageNotFound';
PageNotFound.defaultProps = {};

export default React.memo(PageNotFound);
