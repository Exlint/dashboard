import React from 'react';

import type { ISideBarGroup } from '@/containers/GroupCenter/interfaces/group';

import GroupItemView from './GroupItem.view';

interface IProps {
	readonly group: ISideBarGroup;
	readonly isSelected: boolean;
	readonly onCopyGroupId: (groupId: string) => void;
}

const GroupItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupItemView
			group={props.group}
			isSelected={props.isSelected}
			onCopyGroupId={props.onCopyGroupId}
		/>
	);
};

GroupItem.displayName = 'GroupItem';
GroupItem.defaultProps = {};

export default React.memo(GroupItem);
