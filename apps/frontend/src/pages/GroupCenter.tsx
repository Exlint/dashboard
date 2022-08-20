import React from 'react';

import GroupCenter from '@/containers/GroupCenter';

interface IProps {}

const GroupCenterPage: React.FC<IProps> = () => {
	return <GroupCenter />;
};

GroupCenterPage.displayName = 'GroupCenterPage';
GroupCenterPage.defaultProps = {};

export default GroupCenterPage;
