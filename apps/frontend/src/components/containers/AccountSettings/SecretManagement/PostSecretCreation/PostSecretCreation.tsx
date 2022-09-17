import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import type { ISecretDetails } from '../interfaces/secret';

import PostSecretCreationView from './PostSecretCreation.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly createdSecretDetails: ISecretDetails;
}

const PostSecretCreation: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onDelete = () => {
		backendApi.delete(`/user/secrets/${props.createdSecretDetails.secretId}`).then(() => {
			navigate('', { replace: true });
		});
	};

	const onCopySecretValue = () => {
		navigator.clipboard.writeText(props.createdSecretDetails.secretValue);
		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('accountSettings.secretManagement.copyNotificationTitle'),
			notificationMessage: t('accountSettings.secretManagement.copyNotificationMessage'),
		});
	};

	return (
		<PostSecretCreationView
			createdSecretValue={props.createdSecretDetails.secretValue}
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
