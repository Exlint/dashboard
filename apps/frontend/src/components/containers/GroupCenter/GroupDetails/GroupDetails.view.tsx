import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupInfo from './GroupInfo';

import classes from './GroupDetails.module.scss';
import Policies from './Policies';

interface IProps {
	readonly selectedGroup: IGroup;
}

const GroupDetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const groupPolicies = props.selectedGroup.policies;

	return (
		<section className={classes['groupDetails']}>
			<GroupInfo selectedGroup={props.selectedGroup} />
			<Policies groupPolicies={groupPolicies} />
		</section>
	);
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
