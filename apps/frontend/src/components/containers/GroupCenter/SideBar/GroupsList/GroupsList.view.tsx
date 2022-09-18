import React from 'react';
import { Element } from 'react-scroll';

import type { ISideBarGroup } from '../../interfaces/group';

import classes from './GroupsList.module.scss';
import GroupItem from './GroupItem';

interface IProps {
	readonly groups: ISideBarGroup[];
	readonly selectedGroupId?: string;
	readonly onCopyGroupId: (groupId: string) => void;
}

const GroupsListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div id="group-list-container" className={classes['container']}>
			{props.groups.map((group) => (
				<GroupItem
					key={group.id}
					group={group}
					isSelected={props.selectedGroupId === group.id}
					onCopyGroupId={props.onCopyGroupId}
				/>
			))}
			<Element name="group-list-end" />
		</div>
	);
};

GroupsListView.displayName = 'GroupsListView';
GroupsListView.defaultProps = {};

export default React.memo(GroupsListView);
