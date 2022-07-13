import React from 'react';
import VSvg from '@/ui/VSvg';

import classes from './LoginForm.module.scss';

interface IProps {}

const LoginFormView: React.FC<IProps> = () => {
	const githubAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/github-auth`;
	const googleAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/google-auth`;

	return (
		<>
			<h3 className={classes['loginFormTitle']}>Welcome.</h3>
			<div className={classes['integrationsButtons']}>
				<a className={classes['githubIntegrationButton']} href={githubAuthUrl}>
					<VSvg name="githubIcon" className={classes['githubIntegrationButton__icon']} />
					<span className={classes['githubIntegrationButton__text']}>Continue with GitHub</span>
				</a>
				<a className={classes['googleIntegrationButton']} href={googleAuthUrl}>
					<VSvg name="googleIcon" className={classes['googleIntegrationButton__icon']} />
					<span className={classes['googleIntegrationButton__text']}>Continue with Google</span>
				</a>
			</div>
		</>
	);
};

LoginFormView.displayName = 'LoginFormView';
LoginFormView.defaultProps = {};

export default React.memo(LoginFormView);
