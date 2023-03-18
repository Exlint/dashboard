import React from 'react';

import Policy from '@/containers/Policy';

interface IProps {}

const PolicyPage: React.FC<IProps> = () => {
	return <Policy />;
};

PolicyPage.displayName = 'PolicyPage';
PolicyPage.defaultProps = {};

export default PolicyPage;
