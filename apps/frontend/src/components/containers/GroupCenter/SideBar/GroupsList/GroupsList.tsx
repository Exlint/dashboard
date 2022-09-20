import React from 'react';

import type { ISideBarGroup } from '@/store/interfaces/groups';

import GroupsListView from './GroupsList.view';

interface IProps {
	readonly groups: ISideBarGroup[];
}

const GroupsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <GroupsListView groups={props.groups} />;
};

GroupsList.displayName = 'GroupsList';
GroupsList.defaultProps = {};

export default React.memo(GroupsList);
