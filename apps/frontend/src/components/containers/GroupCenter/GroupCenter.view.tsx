import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '@/layout/Nav';

import SideBar from './SideBar';

import classes from './GroupCenter.module.scss';

interface IProps {}

const GroupCenterView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<Nav />
			<div className={classes['content']}>
				<SideBar />

				<Outlet />
			</div>
		</div>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
