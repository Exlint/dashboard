import React from 'react';

import NotFoundView from './NotFound.view';

interface IProps {}

const NotFound: React.FC<IProps> = () => {
	return <NotFoundView />;
};

NotFound.displayName = 'NotFound';
NotFound.defaultProps = {};

export default React.memo(NotFound);
