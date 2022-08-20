import React from 'react';

import type { IGroup } from '@/interfaces/group';

import GroupsListView from './GroupsList.view';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number;
	readonly searchGroupInput: string | null;
	readonly onSelectGroup: (_: number) => void;
}

const GroupsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let filteredGroupsList = props.groupsList;

	if (props.searchGroupInput !== null) {
		filteredGroupsList = props.groupsList.filter(
			(group) =>
				group.label.includes(props.searchGroupInput!) ||
				group.label.toLowerCase().includes(props.searchGroupInput!),
		);
	}

	return (
		<GroupsListView
			filteredGroupsList={filteredGroupsList}
			selectedGroupIndex={props.selectedGroupIndex}
			searchGroupInput={props.searchGroupInput}
			onSelectGroup={props.onSelectGroup}
		/>
	);
};

GroupsList.displayName = 'GroupsList';
GroupsList.defaultProps = {};

export default GroupsList;
