import React from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import ConfigurationView from './Configuration.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const Configuration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const onSelectionBasedConfigurationTabClick = () => {
		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('policy.configurations.comingSoonNotificationTitle'),
			notificationMessage: '',
		});
	};

	return (
		<ConfigurationView onSelectionBasedConfigurationTabClick={onSelectionBasedConfigurationTabClick} />
	);
};

Configuration.displayName = 'Configuration';
Configuration.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Configuration));
