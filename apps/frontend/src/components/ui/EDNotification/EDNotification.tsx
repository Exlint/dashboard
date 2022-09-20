import React, { useEffect, useState } from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import type { NotificationType } from '@/store/interfaces/ui';
import type { AppState } from '@/store/app';
import { uiActions } from '@/store/reducers/ui';

import EDNotificationView from './EDNotification.view';

interface IPropsFromState {
	readonly isNotificationVisible: boolean;
	readonly notificationType: NotificationType | null;
	readonly notificationTitle: string | null;
	readonly notificationMessage?: string | null;
}

interface IPropsFromDispatch {
	readonly closeNotification: () => PayloadAction;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const EDNotification: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isWithFullOpacityState, setIsWithFullOpacityState] = useState<boolean>(false);

	useEffect(() => {
		setIsWithFullOpacityState(() => props.isNotificationVisible);
	}, [props.isNotificationVisible]);

	const onCloseNotification = () => {
		setIsWithFullOpacityState(() => false);
		props.closeNotification();
	};

	return (
		<EDNotificationView
			notificationType={props.notificationType}
			notificationTitle={props.notificationTitle}
			notificationMessage={props.notificationMessage}
			isWithFullOpacity={isWithFullOpacityState}
			onCloseNotification={onCloseNotification}
		/>
	);
};

EDNotification.displayName = 'EDNotification';
EDNotification.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		isNotificationVisible: state.ui.isNotificationVisible,
		notificationType: state.ui.notificationType,
		notificationTitle: state.ui.notificationTitle,
		notificationMessage: state.ui.notificationMessage,
	};
};

export default connect(mapStateToProps, {
	closeNotification: uiActions.closeNotification,
})(React.memo(EDNotification));
