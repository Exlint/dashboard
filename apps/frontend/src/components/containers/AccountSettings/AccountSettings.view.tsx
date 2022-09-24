import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '@/layout/Nav';

import Header from './Header';
import SideBar from './SideBar';

import classes from './AccountSettings.module.scss';

interface IProps {}

const AccountSettingsView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<Nav />
			<Header />
			<div className={classes['content']}>
				<SideBar />

				<Outlet />
			</div>
		</div>
	);
};

AccountSettingsView.displayName = 'AccountSettingsView';
AccountSettingsView.defaultProps = {};

export default React.memo(AccountSettingsView);
