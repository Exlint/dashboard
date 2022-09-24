import React from 'react';

import SideBarView from './SideBar.view';

interface IProps {}

const SideBar: React.FC<IProps> = () => {
	return <SideBarView />;
};

SideBar.displayName = 'SideBar';
SideBar.defaultProps = {};

export default React.memo(SideBar);
