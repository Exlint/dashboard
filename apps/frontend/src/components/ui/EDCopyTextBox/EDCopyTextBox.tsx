import React from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import EDCopyTextBoxView from './EDCopyTextBox.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly className?: string;
	readonly value: string;
}

const EDCopyTextBox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const onCopyClientId = () => {
		navigator.clipboard.writeText(props.value);

		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('copyNotification.title'),
			notificationMessage: t('copyNotification.message'),
		});
	};

	return <EDCopyTextBoxView className={props.className} value={props.value} onCopyClick={onCopyClientId} />;
};

EDCopyTextBox.displayName = 'EDCopyTextBox';
EDCopyTextBox.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(EDCopyTextBox));
