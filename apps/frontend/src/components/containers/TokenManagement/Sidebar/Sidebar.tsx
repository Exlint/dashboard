import React from 'react';

import SidebarView from './Sidebar.view';

interface IProps {}

const Sidebar: React.FC<IProps> = () => {
	return <SidebarView />;
};

Sidebar.displayName = 'Sidebar';
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
