import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import whiteBrandLogo from '@/images/white-brand-logo.png';
import EDSvg from '@/ui/EDSvg';

import NavLink from './NavLink';

import classes from './Nav.module.scss';

interface IProps {}

const NavView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<nav className={classes['container']} data-testid="nav">
			<div className={classes['linksContainer']}>
				<Link className={classes['logoLink']} to="/">
					<img className={classes['logoLink__logo']} src={whiteBrandLogo} alt="Exlint" />
				</Link>

				<NavLink
					route="/compliance-center"
					iconName="complianceCenterRoute"
					text={t('nav.complianceCenter')}
					testId="nav-compliance-center-link"
				/>

				<NavLink
					route="/account-settings"
					iconName="greyUser"
					text={t('nav.accountSettings')}
					testId="nav-account-settings-link"
				/>
			</div>

			<a
				className={classes['documentationLink']}
				href="https://docs.exlint.io"
				target="_blank"
				data-testid="nav-documentations-link"
			>
				<span className={classes['documentationLink__text']}>{t('nav.documentation')}</span>
				<EDSvg className={classes['documentationLink__icon']} name="enterLink" />
			</a>
		</nav>
	);
};

NavView.displayName = 'NavView';
NavView.defaultProps = {};

export default React.memo(NavView);
