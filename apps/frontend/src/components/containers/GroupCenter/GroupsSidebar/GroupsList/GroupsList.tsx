import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupsListView from './GroupsList.view';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number;
	readonly onSelectGroup: (index: number) => void;
}

const GroupsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupsListView
			groupsList={props.groupsList}
			selectedGroupIndex={props.selectedGroupIndex}
			onSelectGroup={props.onSelectGroup}
		/>
	);
};

GroupsList.displayName = 'GroupsList';
GroupsList.defaultProps = {};

export default GroupsList;
