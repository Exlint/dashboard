import React from 'react';

import Login from '../components/containers/Login';

interface IProps {}

const LoginPage: React.FC<IProps> = () => {
	return <Login />;
};

LoginPage.displayName = 'login';

export default LoginPage;
