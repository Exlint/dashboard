import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './FallingCheddars.module.scss';

interface IProps {}

const FallingCheddarsView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<span className={classes['container__cheddar']}>{t('pageNotFound.star')}</span>
			<span className={classes['container__cheddar']}>{t('pageNotFound.star')}</span>
			<span className={classes['container__cheddar']}>{t('pageNotFound.star')}</span>
			<span className={classes['container__cheddar']}>{t('pageNotFound.star')}</span>
			<span className={classes['container__cheddar']}>{t('pageNotFound.star')}</span>
			<span className={classes['container__cheddar']}>{t('pageNotFound.star')}</span>
		</div>
	);
};

FallingCheddarsView.displayName = 'FallingCheddarsView';
FallingCheddarsView.defaultProps = {};

export default React.memo(FallingCheddarsView);
