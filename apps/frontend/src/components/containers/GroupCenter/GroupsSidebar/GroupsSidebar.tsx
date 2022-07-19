import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupsSidebarView from './GroupsSidebar.view';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectGroup: (index: number) => void;
}

const GroupsSidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupsSidebarView
			groupsList={props.groupsList}
			selectedGroupIndex={props.selectedGroupIndex}
			onCreateNewGroup={props.onCreateNewGroup}
			onSelectGroup={props.onSelectGroup}
		/>
	);
};

GroupsSidebar.displayName = 'GroupsSidebar';
GroupsSidebar.defaultProps = {};

export default React.memo(GroupsSidebar);
