import React from 'react';

import type { IGroup } from '@/interfaces/group';

import GroupDetailsView from './GroupDetails.view';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly onUpdateGroupLabel: (_: string, newLabel: string) => void;
	readonly onAddGroup: (_: IGroup) => void;
	readonly onRemoveGroup: (_: string) => void;
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
