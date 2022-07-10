import React from 'react';
import VSvg from '@/ui/VSvg';

import Input from '@/ui/Input';
import classes from './LoginForm.module.scss';

interface IProps {
	readonly emailInput: string | null;
	readonly passwordInput: string | null;
	readonly isEmailOnError: boolean;
	readonly isPasswordOnError: boolean;
	readonly isFormOnSuccess: boolean;
	readonly onEmailInputChange: (_: string) => void;
	readonly onPasswordInputChange: (_: string) => void;
	readonly onFormSubmit: (_: React.FormEvent) => void;
	readonly onRegisterButtonClicked: () => void;
}

const LoginFormView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const githubAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/github-auth`;

	return (
		<>
			<h3 className={classes['loginFormTitle']}>Welcome.</h3>
			<div className={classes['integrationsButtons']}>
				<a className={classes['githubIntegrationButton']} href={githubAuthUrl} target="_blank">
					<VSvg name="githubIcon" className={classes['githubIntegrationButton__icon']} />
					<span className={classes['githubIntegrationButton__text']}>Continue with GitHub</span>
				</a>
				<a className={classes['googleIntegrationButton']}>
					<VSvg name="googleIcon" className={classes['googleIntegrationButton__icon']} />
					<span className={classes['googleIntegrationButton__text']}>Continue with Google</span>
				</a>
			</div>

			<form className={classes['signinForm']} noValidate onSubmit={props.onFormSubmit}>
				<div className={classes['dividerContainer']}>
					<hr className={classes['dividerContainer__line']} />
					<span className={classes['dividerContainer__text']}>OR</span>
					<hr className={classes['dividerContainer__line']} />
				</div>
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

				<div className={classes['checkBoxContainer']}>
					<input className={classes['checkBoxContainer__checkBox']} type="checkbox" />
					<span className={classes['checkBoxContainer__text']}>Remember me</span>
				</div>
				<button
					type="submit"
					className={classes['submitButton']}
					style={{
						backgroundColor: props.emailInput && props.passwordInput ? '#7a4df3' : '#e7e7e7',
						borderColor: props.emailInput && props.passwordInput ? '##FEFEFE' : '#bbb8ca',
					}}
				>
					CONTINUE WITH EMAIL
				</button>
				<button
					className={classes['signinForm__register']}
					type="button"
					onClick={props.onRegisterButtonClicked}
				>
					Sign up using Email
				</button>
			</form>
		</>
	);
};

LoginFormView.displayName = 'LoginFormView';
LoginFormView.defaultProps = {};

export default React.memo(LoginFormView);
