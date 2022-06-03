import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IUser } from '@/interfaces/user';
import * as userActions from '../../../../store/actions/user';
import { validateEmail } from '../../../../utils/validators';

import LoginFormView from './LoginForm.view';

interface IPropsFromDispatch {
	setUser: (email: IUser) => userActions.SetUser;
}

interface IProps extends IPropsFromDispatch {
	readonly onRegisterButtonClicked: () => void;
}

const LoginForm: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const history = useHistory();

	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [passwordInputState, setPasswordInputState] = useState<string | null>(null);

	const [isEmailOnErrorState, setIsEmailOnErrorState] = useState<boolean>(false);
	const [isPasswordOnErrorState, setIsPasswordOnErrorState] = useState<boolean>(false);

	const [isFormOnSuccessState, setIsFormOnSuccessState] = useState<boolean>(false);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);
	const onPasswordInputChange = (input: string) => setPasswordInputState(() => input);

	const onFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		setIsEmailOnErrorState(() => false);
		setIsPasswordOnErrorState(() => false);

		let formHasFailed = false;

		if (!emailInputState || !validateEmail(emailInputState)) {
			setIsEmailOnErrorState(() => true);
			setIsFormOnSuccessState(() => false);

			formHasFailed = true;
		}

		if (!passwordInputState) {
			setIsPasswordOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!formHasFailed && emailInputState !== null) {
			props.setUser({ email: emailInputState });
			history.push('/groupCenter');
			setIsFormOnSuccessState(() => true);
		}
	};

	return (
		<LoginFormView
			emailInput={emailInputState}
			passwordInput={passwordInputState}
			isEmailOnError={isEmailOnErrorState}
			isPasswordOnError={isPasswordOnErrorState}
			isFormOnSuccess={isFormOnSuccessState}
			onEmailInputChange={onEmailInputChange}
			onPasswordInputChange={onPasswordInputChange}
			onFormSubmit={onFormSubmit}
			onRegisterButtonClicked={props.onRegisterButtonClicked}
		/>
	);
};

LoginForm.displayName = 'LoginForm';
LoginForm.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserTypes>): IPropsFromDispatch => {
	return {
		setUser: (user: IUser): userActions.SetUser => dispatch(userActions.setUser(user)),
	};
};

export default connect(null, mapDispatchToProps)(React.memo(LoginForm));
