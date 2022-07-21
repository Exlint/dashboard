import React from 'react';
import { useTranslation } from 'react-i18next';

import ExternalAction from '@/layout/ExternalAction';

import classes from './CliAuthenticated.module.scss';

interface IProps {}

const CliAuthenticatedView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<ExternalAction>
			<h2 className={classes['header']}>{t('cliAuthenticated.header')}</h2>
			<span className={classes['text']}>{t('cliAuthenticated.text')}</span>
		</ExternalAction>
	);
};

CliAuthenticatedView.displayName = 'CliAuthenticatedView';
CliAuthenticatedView.defaultProps = {};

export default React.memo(CliAuthenticatedView);
