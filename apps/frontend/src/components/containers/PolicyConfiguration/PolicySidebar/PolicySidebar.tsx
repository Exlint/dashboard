import React from 'react';

import PolicySidebarView from './PolicySidebar.view';

interface IProps {}

const PolicySidebar: React.FC<IProps> = () => {
	return <PolicySidebarView />;
};

PolicySidebar.displayName = 'PolicySidebar';
PolicySidebar.defaultProps = {};

export default React.memo(PolicySidebar);
