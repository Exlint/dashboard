import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupsSidebarView from './GroupsSidebar.view';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly groupsList: IGroup[] | [];
	readonly onSelectedGroup: (group: IGroup) => void;
	readonly onCreateNewGroup: () => void;
}

const GroupsSidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupsSidebarView
			groupsList={props.groupsList}
			selectedGroup={props.selectedGroup}
			onCreateNewGroup={props.onCreateNewGroup}
			onSelectedGroup={props.onSelectedGroup}
		/>
	);
};

GroupsSidebar.displayName = 'GroupsSidebar';
GroupsSidebar.defaultProps = {};

export default React.memo(GroupsSidebar);
