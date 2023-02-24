import React from 'react';

import AccountSettings from '@/containers/AccountSettings';
import Page from '@/helpers/Page';

interface IProps {}

const AccountSettingsPage: React.FC<IProps> = () => {
	return (
		<Page>
			<AccountSettings />
		</Page>
	);
};

AccountSettingsPage.displayName = 'AccountSettingsPage';
AccountSettingsPage.defaultProps = {};

export default AccountSettingsPage;
