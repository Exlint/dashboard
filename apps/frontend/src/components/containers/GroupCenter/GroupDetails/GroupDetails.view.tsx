import React from 'react';

import type { IGroup } from '@/interfaces/group';

import GroupInfo from './GroupInfo';

import classes from './GroupDetails.module.scss';
import Policies from './Policies';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly onUpdateGroupLabel: (groupId: string, newLabel: string) => void;
	readonly onRemoveGroup: (groupId: string) => void;
}

const GroupDetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const groupPolicies = props.selectedGroup.policies;

	return (
		<section className={classes['groupDetails']}>
			<GroupInfo
				selectedGroup={props.selectedGroup}
				onUpdateGroupLabel={props.onUpdateGroupLabel}
				onRemoveGroup={props.onRemoveGroup}
			/>
			<Policies groupPolicies={groupPolicies} />
		</section>
	);
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
