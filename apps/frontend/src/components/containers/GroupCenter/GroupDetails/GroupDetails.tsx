import React from 'react';

import type { IGroup } from '@/interfaces/group';

import GroupDetailsView from './GroupDetails.view';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly onUpdateGroupLabel: (groupId: string, newLabel: string) => void;
	readonly onAddGroup: (group: IGroup) => void;
	readonly onRemoveGroup: (groupId: string) => void;
}

const GroupDetails: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupDetailsView
			selectedGroup={props.selectedGroup}
			onUpdateGroupLabel={props.onUpdateGroupLabel}
			onAddGroup={props.onAddGroup}
			onRemoveGroup={props.onRemoveGroup}
		/>
	);
};

GroupDetails.displayName = 'GroupDetails';
GroupDetails.defaultProps = {};

export default React.memo(GroupDetails);
