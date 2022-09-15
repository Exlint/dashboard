import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from '@/store/app';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import HeaderView from './Header.view';

interface IPropsFromState {
	readonly name: string;
	readonly clientId: string;
	readonly createdAt: number;
}

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const creationDateFormatted = new Intl.DateTimeFormat('en-US').format(props.createdAt);

	const onCopyClientId = () => {
		navigator.clipboard.writeText(props.clientId);

		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('accountSettings.copyNotification.title'),
			notificationMessage: t('accountSettings.copyNotification.message'),
		});
	};

	return (
		<HeaderView
			name={props.name}
			clientId={props.clientId}
			userCreationDate={creationDateFormatted}
			onCopyClientId={onCopyClientId}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		name: state.auth.name!,
		clientId: state.auth.id!,
		createdAt: state.auth.createdAt!,
	};
};

export default connect(mapStateToProps, {
	showNotification: uiActions.showNotification,
})(React.memo(Header));
