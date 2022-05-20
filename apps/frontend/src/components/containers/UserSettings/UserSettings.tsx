import React from 'react';

import UserSettingsView from './UserSettings.view';

interface IProps {}

const UserSettings: React.FC<IProps> = () => {
	return <UserSettingsView />;
};

UserSettings.displayName = 'UserSettings';
UserSettings.defaultProps = {};

export default React.memo(UserSettings);
