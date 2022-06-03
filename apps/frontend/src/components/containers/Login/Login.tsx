import React, { useState } from 'react';

import LoginView from './Login.view';

interface IProps {}

const Login: React.FC<IProps> = () => {
	const [isRegisterButtonClickedState, setIsRegisterButtonClickedState] = useState<boolean>(false);

	const onRegisterButtonClicked = () =>
		setIsRegisterButtonClickedState(() => !isRegisterButtonClickedState);

	return (
		<LoginView
			isRegisterButtonClicked={isRegisterButtonClickedState}
			onRegisterButtonClicked={onRegisterButtonClicked}
		/>
	);
};

Login.displayName = 'Login';
Login.defaultProps = {};

export default React.memo(Login);
