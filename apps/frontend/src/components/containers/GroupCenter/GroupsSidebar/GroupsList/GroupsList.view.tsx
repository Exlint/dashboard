import React from 'react';

import { IGroup } from '@/interfaces/group';

import Group from './Group';

import classes from './GroupsList.module.scss';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number;
	readonly searchGroupInput: string | null;
	readonly onSelectGroup: (index: number) => void;
}

const GroupsListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let filteredGroupList = props.groupsList;

	if (props.searchGroupInput !== null) {
		filteredGroupList = props.groupsList.filter(
			(group) =>
				group.label.includes(props.searchGroupInput!) ||
				group.label.toLowerCase().includes(props.searchGroupInput!),
		);
	}

	return (
		<div className={classes['container']}>
			{filteredGroupList.map((group, index) => (
				<>
					<Group
						key={group.id}
						groupId={group.id}
						groupLabel={group.label}
						createdAt={group.createdAt}
						policies={group.policies.slice(0, 4)}
						isSelected={index === props.selectedGroupIndex}
						onSelectGroup={() => props.onSelectGroup(index)}
					/>
					<hr className={classes['container__divider']} />
				</>
			))}
		</div>
	);
};

GroupsListView.displayName = 'GroupsListView';
GroupsListView.defaultProps = {};

export default React.memo(GroupsListView);
