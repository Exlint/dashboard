import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from '@/layout/Nav';

import SideBar from './SideBar';
import type { ISideBarGroup } from './interfaces/group';
import NewGroup from './NewGroup';
import GroupDetails from './GroupDetails';

import classes from './GroupCenter.module.scss';

interface IProps {
	readonly sideBarGroups: ISideBarGroup[];
	readonly onAddGroupToSideBar: (group: ISideBarGroup) => void;
}

const GroupCenterView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<Nav />
			<div className={classes['content']}>
				<SideBar groups={props.sideBarGroups} />

				<Routes>
					<Route
						path="/new"
						element={<NewGroup onAddGroupToSideBar={props.onAddGroupToSideBar} />}
					/>
					<Route path="/:groupId" element={<GroupDetails />} />
				</Routes>
			</div>
		</div>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
