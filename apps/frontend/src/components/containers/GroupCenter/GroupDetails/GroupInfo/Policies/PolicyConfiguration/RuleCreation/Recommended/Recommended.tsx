import React from 'react';

import RecommendedView from './Recommended.view';

interface IProps {}

const Recommended: React.FC<IProps> = () => {
	return <RecommendedView />;
};

Recommended.displayName = 'Recommended';
Recommended.defaultProps = {};

export default React.memo(Recommended);
