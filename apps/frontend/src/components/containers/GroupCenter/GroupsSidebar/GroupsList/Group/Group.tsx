import React from 'react';

import type { IPolicy } from '@/interfaces/policy';

import GroupView from './Group.view';

interface IProps {
	readonly groupId: string;
	readonly groupLabel: string;
	readonly createdAt: string;
	readonly policies: IPolicy[];
	readonly isSelected: boolean;
	readonly onSelectGroup: () => void;
}

const Group: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let slicedPolicies: IPolicy[] = [];

	if (props.policies !== undefined) {
		slicedPolicies = props.policies.slice(0, 4);
	}

	return (
		<GroupView
			groupId={props.groupId}
			groupLabel={props.groupLabel}
			createdAt={props.createdAt}
			policies={slicedPolicies}
			isSelected={props.isSelected}
			onSelectGroup={props.onSelectGroup}
		/>
	);
};

Group.displayName = 'Group';
Group.defaultProps = {};

export default React.memo(Group);
