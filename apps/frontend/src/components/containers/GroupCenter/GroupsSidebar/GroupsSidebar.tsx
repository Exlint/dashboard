import React, { useState } from 'react';

import { IGroup } from '@/interfaces/group';

import GroupsSidebarView from './GroupsSidebar.view';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const GroupsSidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [groupsList, setGroupsList] = useState<IGroup[]>([]);

	const onCreateNewGroup = () => {
		setGroupsList([...groupsList, { title: 'Group Label', id: Math.random(), policies: [1, 2, 3, 4] }]);
	};

	return (
		<GroupsSidebarView
			groupsList={groupsList}
			selectedGroup={props.selectedGroup}
			onCreateNewGroup={onCreateNewGroup}
			onSelectedGroup={props.onSelectedGroup}
		/>
	);
};

GroupsSidebar.displayName = 'GroupsSidebar';
GroupsSidebar.defaultProps = {};

export default React.memo(GroupsSidebar);
