import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';

import notFoundBrandLogo from '@/images/not-found-brand-logo.png';
import notFound from '@/images/not-found.gif';

import classes from './NotFound.module.scss';

interface IProps {}

const NotFoundView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<>
			<header className={classes['header']}>
				<img className={classes['header__img']} src={notFoundBrandLogo} alt="Exlint" />

				<a className={classes['documentationLink']} href="https://www.docs.exlint.io">
					<span className={classes['documentationLink__text']}>
						{t('notFound.header.documentationLink')}
					</span>
					<EDSvg className={classes['documentationLink__icon']} name="enterLink" />
				</a>
			</header>

			<main className={classes['main']}>
				<section className={classes['notFoundContainer']}>
					<div className={classes['notFoundTextContainer']}>
						<h1 className={classes['notFoundTextContainer__header']}>404</h1>
						<h3 className={classes['notFoundTextContainer__subHeader']}>
							<Trans i18nKey="notFound.message" />
						</h3>
					</div>

					<img className={classes['notFoundContainer__img']} src={notFound} alt="Not Found" />
				</section>

				<Link className={classes['returnLink']} to="/">
					{t('notFound.actions.linkText')}
				</Link>

				<span className={classes['contact']}>
					{t('notFound.actions.textPrefix')}
					&nbsp;
					<a className={classes['contact__link']} href="mailto:contact@exlint.io">
						<Trans>contact@exlint.io</Trans>
					</a>
				</span>
			</main>
		</>
	);
};

NotFoundView.displayName = 'NotFoundView';
NotFoundView.defaultProps = {};

export default React.memo(NotFoundView);
