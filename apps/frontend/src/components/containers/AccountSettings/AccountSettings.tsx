import React from 'react';

import AccountSettingsView from './AccountSettings.view';

interface IProps {}

const AccountSettings: React.FC<IProps> = () => {
	return <AccountSettingsView />;
};

AccountSettings.displayName = 'AccountSettings';
AccountSettings.defaultProps = {};

export default React.memo(AccountSettings);
