import React from 'react';

import VSvg from '@/ui/VSvg';

import LoginForm from './LoginForm';

import classes from './Auth.module.scss';

interface IProps {}

const AuthView: React.FC<IProps> = () => {
	return (
		<main className={classes['main']}>
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
						<LoginForm />
					</div>
				</div>
			</div>
		</main>
	);
};

AuthView.displayName = 'LoginView';
AuthView.defaultProps = {};

export default React.memo(AuthView);
