import React from 'react';

import AccountSettings from '@/containers/AccountSettings';

interface IProps {}

const AccountSettingsPage: React.FC<IProps> = () => {
	return <AccountSettings />;
};

AccountSettingsPage.displayName = 'AccountSettingsPage';
AccountSettingsPage.defaultProps = {};

export default AccountSettingsPage;
