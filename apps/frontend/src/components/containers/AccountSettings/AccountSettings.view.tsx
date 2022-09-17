import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Nav from '@/layout/Nav';

import Header from './Header';
import SideBar from './SideBar';
import Account from './Account';
import SecretManagement from './SecretManagement';
import NewSecret from './NewSecret';

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
					<Route path="/secret-management" element={<SecretManagement />} />
					<Route path="/secret-management/new" element={<NewSecret />} />
					<Route
						path="/secret-management/*"
						element={<Navigate to="secret-management" replace />}
					/>
					<Route path="/*" element={<Navigate to="account" replace />} />
				</Routes>
			</div>
		</div>
	);
};

AccountSettingsView.displayName = 'AccountSettingsView';
AccountSettingsView.defaultProps = {};

export default React.memo(AccountSettingsView);
