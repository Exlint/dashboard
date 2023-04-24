import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';
import githubBrandLogo from '@/images/github-brand-logo.png';

import classes from './RightSide.module.scss';

interface IProps {
	readonly port: string | null;
}

const RightSideView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let githubAuthUrl = `${import.meta.env.VITE_BACKEND_URL}/user/auth/github-auth`;

	if (props.port) {
		githubAuthUrl += `?port=${props.port}`;
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
				data-testid="auth-github-auth-button"
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

			<hr className={classes['rightSideContainer__divider']} />

			<span className={classes['rightSideContainer__permissionsDisclaimer']}>
				{t('auth.permissionsDisclaimer')}
			</span>

			<span className={classes['rightSideContainer__policyText']}>
				{t('auth.policiesDisclaimer.prefix')}
				<br />
				<a
					className={classes['rightSideContainer__textLink']}
					href="https://github.com/Exlint/public-exlint-usage-policies/blob/main/terms-of-service"
					target="_blank"
					data-testid="auth-terms-of-service-link"
				>
					{t('auth.policiesDisclaimer.termsOfService')}
				</a>
				&nbsp;
				{t('auth.policiesDisclaimer.and')}
				&nbsp;
				<a
					className={classes['rightSideContainer__textLink']}
					href="https://github.com/Exlint/public-exlint-usage-policies/blob/main/privacy-policy"
					target="_blank"
					data-testid="auth-privacy-policy-link"
				>
					{t('auth.policiesDisclaimer.privacyPolicy')}
				</a>
			</span>
		</section>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
