import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Nav from '@/layout/Nav';

import Header from './Header';
import SideBar from './SideBar';
import Account from './Account';

import classes from './AccountSettings.module.scss';

interface IProps {}

const AccountSettingsView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<Nav />
			<Header />
			<div className={classes['content']}>
				<SideBar />
				<Routes>
					<Route path="/" element={<Navigate to="account" replace />} />
					<Route path="/account" element={<Account />} />
					<Route path="/token-management" element={<div>&nbsp;</div>} />
				</Routes>
			</div>
		</div>
	);
};

AccountSettingsView.displayName = 'AccountSettingsView';
AccountSettingsView.defaultProps = {};

export default React.memo(AccountSettingsView);
