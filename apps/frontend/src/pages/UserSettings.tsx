import React from 'react';

import UserSettings from '@/containers/UserSettings';

interface IProps {}

const UserSettingsPage: React.FC<IProps> = () => {
	return <UserSettings />;
};

UserSettingsPage.displayName = 'UserSettingsPage';
UserSettingsPage.defaultProps = {};

export default UserSettingsPage;
