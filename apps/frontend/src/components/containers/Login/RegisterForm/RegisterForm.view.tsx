import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import Input from '@/ui/Input';
import brandLogo from '../../../../assets/images/brandLogo.png';

import classes from './RegisterForm.module.scss';

interface IProps {
	readonly nameInput: string | null;
	readonly emailInput: string | null;
	readonly passwordInput: string | null;
	readonly confirmPasswordInput: string | null;
	readonly isEmailOnError: boolean;
	readonly isPasswordOnError: boolean;
	readonly isFormOnSuccess: boolean;
	readonly onNameInputChange: (_: string) => void;
	readonly onEmailInputChange: (_: string) => void;
	readonly onPasswordInputChange: (_: string) => void;
	readonly onConfirmPasswordInputChange: (_: string) => void;
	readonly onFormSubmit: (_: React.FormEvent) => void;
	readonly onRegisterButtonClicked: () => void;
}

const RegisterFormView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();
	let inputFileds = false;
	// let passwordsIdentical = false;

	if (props.nameInput && props.emailInput && props.passwordInput && props.confirmPasswordInput) {
		inputFileds = true;
	} else {
		inputFileds = false;
	}

	// if (props.passwordInput === props.confirmPasswordInput) {
	// 	passwordsIdentical = true;
	// } else {
	// 	passwordsIdentical = false;
	// }

	return (
		<>
			<button
				className={classes['backToLoginButton']}
				type="button"
				onClick={props.onRegisterButtonClicked}
			>
				Login
			</button>
			<img className={classes['brandLogo']} src={brandLogo} alt="brand logo" />
			<form className={classes['registerForm']} noValidate onSubmit={props.onFormSubmit}>
				<Input
					placeholder="Full Name *"
					type="name"
					value={props.nameInput}
					onChange={props.onNameInputChange}
				/>
				<Input
					placeholder="Enter Adress *"
					type="email"
					value={props.emailInput ?? ''}
					onChange={props.onEmailInputChange}
				/>
				<Input
					placeholder="Password *"
					type="password"
					value={props.passwordInput ?? ''}
					onChange={props.onPasswordInputChange}
				/>
				<Input
					placeholder="Confirm Password *"
					type="password"
					value={props.confirmPasswordInput ?? ''}
					onChange={props.onConfirmPasswordInputChange}
				/>

				<button
					type="submit"
					className={classes['submitButton']}
					style={{
						backgroundColor: inputFileds ? '#7a4df3' : '#e7e7e7',
						borderColor: inputFileds ? '##FEFEFE' : '#bbb8ca',
					}}
				>
					SIGN UP AND CONTINUE
				</button>
			</form>
		</>
	);
};

RegisterFormView.displayName = 'RegisterFormView';
RegisterFormView.defaultProps = {};

export default React.memo(RegisterFormView);
