import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import type { Secret } from '@prisma/client';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import PostSecretCreationView from './PostSecretCreation.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly createdSecretDetails: Pick<Secret, 'id' | 'secret'>;
}

const PostSecretCreation: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onDelete = () => {
		backendApi.delete(`/user/secrets/${props.createdSecretDetails.id}`).then(() => {
			navigate('', { replace: true });
		});
	};

	const onCopySecretValue = () => {
		navigator.clipboard.writeText(props.createdSecretDetails.secret);
		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('accountSettings.secretManagement.copyNotificationTitle'),
			notificationMessage: t('accountSettings.secretManagement.copyNotificationMessage'),
		});
	};

	return (
		<PostSecretCreationView
			createdSecretValue={props.createdSecretDetails.secret}
			onDelete={onDelete}
			onCopySecretValue={onCopySecretValue}
		/>
	);
};

PostSecretCreation.displayName = 'PostSecretCreation';
PostSecretCreation.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(PostSecretCreation));
