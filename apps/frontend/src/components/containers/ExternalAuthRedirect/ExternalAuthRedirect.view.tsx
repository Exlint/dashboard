import React from 'react';
import { useTranslation } from 'react-i18next';

import brandTextLogo from '@/images/brand-text-logo.png';

import classes from './ExternalAuthRedirect.module.scss';

interface IProps {}

const ExternalAuthRedirectView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<>
			<header className={classes['header']}>
				<img className={classes['header__img']} src={brandTextLogo} alt="Exlint" />
			</header>

			<main className={classes['main']}>
				<h2 className={classes['redirectHeader']}>
					{t('redirect.header')}
					...
				</h2>

				<div className={classes['redirectSubTextContainer']}>
					<span className={classes['redirectSubText']}>{t('redirect.subText')}</span>
					&nbsp;
					<a className={classes['redirectSubTextLinkPostfix']} href="/">
						{t('redirect.subTextLinkPostfix')}
					</a>
				</div>
			</main>

			<footer className={classes['footer']}>
				{t('redirect.footerText')}
				&nbsp;
				<a className={classes['footer__contact']} href="mailto:contact@exlint.io">
					contact@exlint.io
				</a>
			</footer>
		</>
	);
};

ExternalAuthRedirectView.displayName = 'ExternalAuthRedirectView';
ExternalAuthRedirectView.defaultProps = {};

export default React.memo(ExternalAuthRedirectView);
