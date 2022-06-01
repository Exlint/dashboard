import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Login.module.scss';

interface IProps {
	readonly emailInput: string | null;
	readonly passwordInput: string | null;
	readonly isEmailOnError: boolean;
	readonly isPasswordOnError: boolean;
	readonly isFormOnSuccess: boolean;
	readonly onEmailInputChange: (_: string) => void;
	readonly onPasswordInputChange: (_: string) => void;
	readonly onFormSubmit: (_: React.FormEvent) => void;
}

const LoginView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<section className={classes['login']}>
			<div className={classes['innerLogin']}>
				<div className={classes['leftSideContainer']}>
					<VSvg className={classes['leftSideContainer__brandLogo']} name="brandLogoWhite" />
					<h2 className={classes['leftSideContainer__title']}>
						Lorem ipsum dolor sit amet consectetur adipiscing elit
					</h2>
					<span className={classes['leftSideContainer__subTitle']}>
						do eiusmod tempor incididunt ut labore et dolore magna
					</span>
				</div>
				<div className={classes['rightSideContainer']}>
					<div className={classes['loginBox']}>
						<h3 className={classes['loginBox__title']}>Welcome.</h3>
						<div className={classes['integrationsButtons']}>
							<button className={classes['githubIntegrationButton']} type="button">
								<VSvg
									name="githubIcon"
									className={classes['githubIntegrationButton__icon']}
								/>
								<span className={classes['githubIntegrationButton__text']}>
									Continue with GitHub
								</span>
							</button>
							<button className={classes['googleIntegrationButton']} type="button">
								<VSvg
									name="googleIcon"
									className={classes['googleIntegrationButton__icon']}
								/>
								<span className={classes['googleIntegrationButton__text']}>
									Continue with Google
								</span>
							</button>
						</div>
						<div className={classes['dividerContainer']}>
							<hr className={classes['dividerContainer__line']} />
							<span className={classes['dividerContainer__text']}>OR</span>
							<hr className={classes['dividerContainer__line']} />
						</div>
						<form className={classes['signinForm']} noValidate onSubmit={props.onFormSubmit}>
							<input
								className={classes['signinForm__emailInput']}
								placeholder="Enter Adress *"
								type="email"
								value={props.emailInput ?? ''}
								onChange={({ currentTarget: { value } }) => props.onEmailInputChange(value)}
							/>
							<input
								className={classes['signinForm__passwordInput']}
								placeholder="Password *"
								type="password"
								value={props.passwordInput ?? ''}
								onChange={({ currentTarget: { value } }) =>
									props.onPasswordInputChange(value)
								}
							/>

							<div className={classes['checkBoxContainer']}>
								<input className={classes['checkBoxContainer__checkBox']} type="checkbox" />
								<span className={classes['checkBoxContainer__text']}>Remember me</span>
							</div>
							<button
								type="submit"
								className={classes['submitButton']}
								style={{
									backgroundColor:
										props.emailInput && props.passwordInput ? '#7a4df3' : '#e7e7e7',
									borderColor:
										props.emailInput && props.passwordInput ? '##FEFEFE' : '#bbb8ca',
								}}
							>
								CONTINUE WITH EMAIL
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

LoginView.displayName = 'LoginView';
LoginView.defaultProps = {};

export default React.memo(LoginView);
