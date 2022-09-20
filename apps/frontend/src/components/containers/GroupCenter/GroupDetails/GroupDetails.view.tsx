import React from 'react';
import { Outlet } from 'react-router-dom';

import type { ISelectedSideBarGroup } from '@/store/interfaces/groups';

import classes from './GroupDetails.module.scss';
import Header from './Header';

interface IProps {
	readonly selectedGroup: ISelectedSideBarGroup | null;
}

const GroupDetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	if (!props.selectedGroup) {
		return null;
	}

	return (
		<main className={classes['main']}>
			<Header groupLabel={props.selectedGroup.label} groupId={props.selectedGroup.id} />

			<Outlet />
		</main>
	);
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
