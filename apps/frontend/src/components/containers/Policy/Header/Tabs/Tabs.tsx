import React from 'react';

import TabsView from './Tabs.view';

interface IProps {
	readonly hasRules: boolean;
}

const Tabs: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <TabsView hasRules={props.hasRules} />;
};

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {};

export default React.memo(Tabs);
