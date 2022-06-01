import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupView from './Group.view';

interface IProps extends IGroup {
	readonly key: number;
	readonly selectedGroup: IGroup | null;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const Group: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupView
			title={props.title}
			id={props.id}
			policies={props.policies}
			key={props.key}
			selectedGroup={props.selectedGroup}
			onSelectedGroup={props.onSelectedGroup}
		/>
	);
};

Group.displayName = 'Group';
Group.defaultProps = {};

export default React.memo(Group);
