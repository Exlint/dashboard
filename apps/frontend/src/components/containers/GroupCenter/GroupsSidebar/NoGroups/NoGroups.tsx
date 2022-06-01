import React from 'react';

import NoGroupsView from './NoGroups.view';

interface IProps {}

const NoGroups: React.FC<IProps> = () => {
	return <NoGroupsView />;
};

NoGroups.displayName = 'NoGroups';
NoGroups.defaultProps = {};

export default React.memo(NoGroups);
