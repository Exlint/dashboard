import React from 'react';

import UserSettings from '@/containers/UserSettings';

interface IProps {}

const AuthPage: React.FC<IProps> = () => {
	return <UserSettings />;
};

AuthPage.displayName = 'AuthPage';
AuthPage.defaultProps = {};

export default AuthPage;
