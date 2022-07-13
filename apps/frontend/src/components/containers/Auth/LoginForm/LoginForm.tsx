import React from 'react';

import LoginFormView from './LoginForm.view';

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
	return <LoginFormView />;
};

LoginForm.displayName = 'LoginForm';
LoginForm.defaultProps = {};

export default React.memo(LoginForm);
