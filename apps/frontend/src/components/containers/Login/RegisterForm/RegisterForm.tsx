import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';

import { IUser } from '@/interfaces/user';
import * as userActions from '../../../../store/actions/user';
import { validateEmail } from '../../../../utils/validators';

import RegisterFormView from './RegisterForm.view';

interface IPropsFromDispatch {
	setUser: (email: IUser) => userActions.SetUser;
}

interface IProps extends IPropsFromDispatch {
	readonly onRegisterButtonClicked: () => void;
}

const RegisterForm: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const history = useHistory();

	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [passwordInputState, setPasswordInputState] = useState<string | null>(null);
	const [nameInputState, setNameInputstate] = useState<string | null>(null);
	const [confirmPasswordInputState, setConfirmPasswordInputState] = useState<string | null>(null);

	const [isEmailOnErrorState, setIsEmailOnErrorState] = useState<boolean>(false);
	const [isPasswordOnErrorState, setIsPasswordOnErrorState] = useState<boolean>(false);

	const [isFormOnSuccessState, setIsFormOnSuccessState] = useState<boolean>(false);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);
	const onPasswordInputChange = (input: string) => setPasswordInputState(() => input);

	const onNameInputChange = (input: string) => setNameInputstate(() => input);
	const onConfirmPasswordInputChange = (input: string) => setConfirmPasswordInputState(() => input);

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
		<RegisterFormView
			nameInput={nameInputState}
			emailInput={emailInputState}
			passwordInput={passwordInputState}
			confirmPasswordInput={confirmPasswordInputState}
			isEmailOnError={isEmailOnErrorState}
			isPasswordOnError={isPasswordOnErrorState}
			isFormOnSuccess={isFormOnSuccessState}
			onNameInputChange={onNameInputChange}
			onEmailInputChange={onEmailInputChange}
			onPasswordInputChange={onPasswordInputChange}
			onConfirmPasswordInputChange={onConfirmPasswordInputChange}
			onFormSubmit={onFormSubmit}
			onRegisterButtonClicked={props.onRegisterButtonClicked}
		/>
	);
};

RegisterForm.displayName = 'RegisterForm';
RegisterForm.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserTypes>): IPropsFromDispatch => {
	return {
		setUser: (user: IUser): userActions.SetUser => dispatch(userActions.setUser(user)),
	};
};

export default connect(null, mapDispatchToProps)(React.memo(RegisterForm));
