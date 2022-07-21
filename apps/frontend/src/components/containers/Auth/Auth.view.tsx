import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import authBrandLogo from '@/images/auth-brand-logo.png';
import githubBrandLogo from '@/images/github-brand-logo.png';
import googleBrandLogo from '@/images/google-brand-logo.png';

import classes from './Auth.module.scss';

interface IProps {
	readonly port: string | null;
}

const AuthView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let githubAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/github-auth`;
	let googleAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/google-auth`;

	if (props.port) {
		githubAuthUrl += `?port=${props.port}`;
		googleAuthUrl += `?port=${props.port}`;
	}

	return (
		<main className={classes['main']}>
			<section className={classes['leftSideContainer']}>
				<img className={classes['leftSideContainer__brandLogo']} src={authBrandLogo} alt="Exlint" />
				<h2 className={classes['leftSideContainer__header']}>
					<Trans i18nKey="auth.backgroundHeader" />
				</h2>
				<h4 className={classes['leftSideContainer__subHeader']}>{t('auth.backgroundSubHeader')}</h4>
			</section>
			<section className={classes['rightSideContainer']}>
				<h3 className={classes['rightSideContainer__header']}>{t('auth.formHeader')}</h3>
				<h4 className={classes['rightSideContainer__subHeader']}>{t('auth.formSubHeader')}</h4>

				<a
					className={concatClasses(
						classes,
						'rightSideExternalAuthContainer',
						'rightSideExternalAuthContainer--github',
					)}
					href={githubAuthUrl}
				>
					<img
						className={classes['rightSideExternalAuthContainer__brandLogo']}
						src={githubBrandLogo}
						alt={t('auth.githubAuth')}
					/>
					<span
						className={concatClasses(
							classes,
							'rightSideExternalAuthContainer__text',
							'rightSideExternalAuthContainer__text--github',
						)}
					>
						{t('auth.githubAuth')}
					</span>
				</a>
				<a
					className={concatClasses(
						classes,
						'rightSideExternalAuthContainer',
						'rightSideExternalAuthContainer--google',
					)}
					href={googleAuthUrl}
				>
					<img
						className={classes['rightSideExternalAuthContainer__brandLogo']}
						src={googleBrandLogo}
						alt={t('auth.googleAuth')}
					/>
					<span
						className={concatClasses(
							classes,
							'rightSideExternalAuthContainer__text',
							'rightSideExternalAuthContainer__text--google',
						)}
					>
						{t('auth.googleAuth')}
					</span>
				</a>

				<hr className={classes['rightSideContainer__divider']} />

				<span className={classes['rightSideContainer__permissionsDisclaimer']}>
					{t('auth.permissionsDisclaimer')}
				</span>

				<span className={classes['rightSideContainer__policyText']}>
					{t('auth.policiesDiscalimer.prefix')}
					<br />
					<a className={classes['rightSideContainer__textLink']} href="">
						{t('auth.policiesDiscalimer.termsOfService')}
					</a>
					&nbsp;
					{t('auth.policiesDiscalimer.and')}
					&nbsp;
					<a className={classes['rightSideContainer__textLink']} href="">
						{t('auth.policiesDiscalimer.privacyPolicy')}
					</a>
				</span>
			</section>
		</main>
	);
};

AuthView.displayName = 'AuthView';
AuthView.defaultProps = {};

export default React.memo(AuthView);
