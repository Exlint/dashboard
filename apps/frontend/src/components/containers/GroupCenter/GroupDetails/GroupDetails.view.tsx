import React from 'react';

import type { IGroup } from '@/interfaces/group';

import GroupInfo from './GroupInfo';

import classes from './GroupDetails.module.scss';
import Policies from './Policies';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly onUpdateGroupLabel: (_: string, __: string) => void;
	readonly onAddGroup: (_: IGroup) => void;
	readonly onRemoveGroup: (_: string) => void;
}

const GroupDetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const groupPolicies = props.selectedGroup.policies;

	return (
		<section className={classes['groupDetails']}>
			<GroupInfo
				selectedGroup={props.selectedGroup}
				onUpdateGroupLabel={props.onUpdateGroupLabel}
				onAddGroup={props.onAddGroup}
				onRemoveGroup={props.onRemoveGroup}
			/>
			<Policies groupPolicies={groupPolicies} />
		</section>
	);
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
