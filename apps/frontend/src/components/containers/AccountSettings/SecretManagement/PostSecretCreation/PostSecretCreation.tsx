import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import type { IGetAllSecretsResponseData } from '@exlint.io/common';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import useBackend from '@/hooks/use-backend';
import BackendService from '@/services/backend';

import type { ISecretRouteState } from '../interfaces/secrets';
import PostSecretCreationView from './PostSecretCreation.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const PostSecretCreation: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const { mutate: getAllSecretsMutate } = useBackend<IGetAllSecretsResponseData>('/user/secrets');

	const createdSecretDetails: ISecretRouteState = location.state;

	if (!createdSecretDetails) {
		return null;
	}

	const onDelete = async () => {
		await getAllSecretsMutate(
			async (currentData) => {
				await BackendService.delete(`/user/secrets/${createdSecretDetails.id}`);

				return {
					...currentData,
					secrets: currentData!.secrets.filter((secret) => secret.id !== createdSecretDetails.id),
				};
			},
			{
				optimisticData: (currentData) => {
					return {
						...currentData,
						secrets: currentData!.secrets.filter(
							(secret) => secret.id !== createdSecretDetails.id,
						),
					};
				},
				rollbackOnError: true,
			},
		);

		navigate('', { replace: true });
	};

	const onCopySecretValue = () => {
		navigator.clipboard.writeText(createdSecretDetails.secret);
		props.showNotification({
			notificationType: 'info',
			notificationTitle: t('accountSettings.secretManagement.copyNotificationTitle'),
			notificationMessage: t('accountSettings.secretManagement.copyNotificationMessage'),
		});
	};

	return (
		<PostSecretCreationView
			createdSecretValue={createdSecretDetails.secret}
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
