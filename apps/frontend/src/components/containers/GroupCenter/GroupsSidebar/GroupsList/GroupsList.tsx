import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupsListView from './GroupsList.view';

interface IProps {
	readonly groupsList: IGroup[] | [];
	readonly selectedGroup: IGroup | null;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const GroupsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupsListView
			groupsList={props.groupsList}
			selectedGroup={props.selectedGroup}
			onSelectedGroup={props.onSelectedGroup}
		/>
	);
};

GroupsList.displayName = 'GroupsList';
GroupsList.defaultProps = {};

export default React.memo(GroupsList);
