import React from 'react';

import SettingsSidebarView from './SettingsSidebar.view';

interface IProps {}

const SettingsSidebar: React.FC<IProps> = () => {
	return <SettingsSidebarView />;
};

SettingsSidebar.displayName = 'SettingsSidebar';
SettingsSidebar.defaultProps = {};

export default React.memo(SettingsSidebar);
