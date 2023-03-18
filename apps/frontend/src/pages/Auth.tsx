import React from 'react';

import Auth from '@/containers/Auth';

interface IProps {}

const AuthPage: React.FC<IProps> = () => {
	return <Auth />;
};

AuthPage.displayName = 'AuthPage';
AuthPage.defaultProps = {};

export default AuthPage;
