import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import authBrandLogo from '@/images/auth-brand-logo.png';

import classes from './LeftSide.module.scss';

interface IProps {}

const AuthView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<img className={classes['container__brandLogo']} src={authBrandLogo} alt="Exlint" />
			<h2 className={classes['container__header']}>
				<Trans i18nKey="auth.backgroundHeader" />
			</h2>
			<h4 className={classes['container__subHeader']}>{t('auth.backgroundSubHeader')}</h4>
		</section>
	);
};

AuthView.displayName = 'AuthView';
AuthView.defaultProps = {};

export default React.memo(AuthView);
