import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import classes from './Intro.module.scss';

interface IProps {}

const IntroView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<h2 className={classes['container__title']}>{t('main.quickSetup.intro.title')}</h2>
			<h3 className={classes['container__title--mobile']}>
				<Trans i18nKey="main.quickSetup.intro.titleMobile" />
			</h3>
			<span className={classes['container__description']}>
				<Trans i18nKey="main.quickSetup.intro.description" />
			</span>
		</div>
	);
};

IntroView.displayName = 'IntroView';
IntroView.defaultProps = {};

export default React.memo(IntroView);
