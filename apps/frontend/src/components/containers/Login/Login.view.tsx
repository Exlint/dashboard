import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Login.module.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface IProps {
	readonly isRegisterButtonClicked: boolean;
	readonly onRegisterButtonClicked: () => void;
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
					<div className={classes['innerForm']}>
						{!props.isRegisterButtonClicked && (
							<LoginForm onRegisterButtonClicked={props.onRegisterButtonClicked} />
						)}
						{props.isRegisterButtonClicked && (
							<RegisterForm onRegisterButtonClicked={props.onRegisterButtonClicked} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

LoginView.displayName = 'LoginView';
LoginView.defaultProps = {};

export default React.memo(LoginView);
