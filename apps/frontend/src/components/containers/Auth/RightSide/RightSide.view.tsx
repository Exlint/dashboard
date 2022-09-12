import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';
import githubBrandLogo from '@/images/github-brand-logo.png';
import googleBrandLogo from '@/images/google-brand-logo.png';

import classes from './RightSide.module.scss';

interface IProps {
	readonly port: string | null;
}

const RightSideView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let githubAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/github-auth`;
	let googleAuthUrl = `${process.env.REACT_APP_BACKEND_URL}/user/auth/google-auth`;

	if (props.port) {
		githubAuthUrl += `?port=${props.port}`;
		googleAuthUrl += `?port=${props.port}`;
	}

	return (
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
				<a
					className={classes['rightSideContainer__textLink']}
					href="https://github.com/Exlint/public-exlint-usage-policies/blob/main/terms-of-service"
					target="_blank"
				>
					{t('auth.policiesDiscalimer.termsOfService')}
				</a>
				&nbsp;
				{t('auth.policiesDiscalimer.and')}
				&nbsp;
				<a
					className={classes['rightSideContainer__textLink']}
					href="https://github.com/Exlint/public-exlint-usage-policies/blob/main/privacy-policy"
					target="_blank"
				>
					{t('auth.policiesDiscalimer.privacyPolicy')}
				</a>
			</span>
		</section>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
