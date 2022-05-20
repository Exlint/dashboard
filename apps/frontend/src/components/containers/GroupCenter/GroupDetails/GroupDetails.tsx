import React from 'react';

import GroupDetailsView from './GroupDetails.view';

interface IProps {}

const GroupDetails: React.FC<IProps> = () => {
	return <GroupDetailsView />;
};

GroupDetails.displayName = 'GroupDetails';
GroupDetails.defaultProps = {};

export default React.memo(GroupDetails);
