import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import brandTextLogo from '@/images/brand-text-logo.png';

import classes from './ExternalAction.module.scss';

interface IProps {}

const ExternalActionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<>
			<header className={classes['header']}>
				<img className={classes['header__img']} src={brandTextLogo} alt="Exlint" />
			</header>

			<main className={classes['main']}>{props.children}</main>

			<footer className={classes['footer']}>
				{t('externalAction.footerText')}
				&nbsp;
				<a className={classes['footer__contact']} href="mailto:contact@exlint.io">
					<Trans>contact@exlint.io</Trans>
				</a>
			</footer>
		</>
	);
};

ExternalActionView.displayName = 'ExternalActionView';
ExternalActionView.defaultProps = {};

export default React.memo(ExternalActionView);
