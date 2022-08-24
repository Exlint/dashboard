import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import ExternalAction from '@/layout/ExternalAction';

import classes from './ExternalAuthRedirect.module.scss';

interface IProps {}

const ExternalAuthRedirectView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<ExternalAction>
			<h2 className={classes['header']}>
				{t('redirect.header')}
				<Trans>...</Trans>
			</h2>

			<div className={classes['subTextContainer']}>
				<span className={classes['subTextContainer__text']}>{t('redirect.subText')}</span>
				&nbsp;
				<a className={classes['subTextContainer__postfix']} href="/">
					{t('redirect.subTextLinkPostfix')}
				</a>
			</div>
		</ExternalAction>
	);
};

ExternalAuthRedirectView.displayName = 'ExternalAuthRedirectView';
ExternalAuthRedirectView.defaultProps = {};

export default React.memo(ExternalAuthRedirectView);
