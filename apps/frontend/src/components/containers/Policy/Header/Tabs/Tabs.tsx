import React from 'react';

import TabsView from './Tabs.view';

interface IProps {}

const Tabs: React.FC<IProps> = () => {
	return <TabsView />;
};

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {};

export default React.memo(Tabs);
