import React, { type FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import type { AxiosResponse } from 'axios';
import type { IEditGroupLabelDto } from '@exlint.io/common';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import type { AppState } from '@/store/app';
import { groupsActions } from '@/store/reducers/groups';
import type { IEditSideBarGroupLabelPayload } from '@/store/interfaces/groups';

import SettingsView from './Settings.view';

interface IPropsFromState {
	readonly groupId: string;
	readonly groupLabel: string;
}

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
	readonly editSideBarGroup: (
		editSideBarGroupPayload: IEditSideBarGroupLabelPayload,
	) => PayloadAction<IEditSideBarGroupLabelPayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const Settings: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const [newGroupLabelInputState, setNewGroupLabelInputState] = useState<string | null>(null);

	const onNewGroupLabelInputChange = (value: string) => setNewGroupLabelInputState(() => value);

	const onSaveChangesButtonClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newGroupLabelInputState === props.groupLabel) {
			props.showNotification({
				notificationType: 'checkmark',
				notificationTitle: t('groupCenter.settings.saveChangesNotification.title'),
				notificationMessage: '',
			});

			return;
		}

		backendApi
			.patch<void, AxiosResponse<void>, IEditGroupLabelDto>(`/user/groups/label/${props.groupId}`, {
				label: newGroupLabelInputState!,
			})
			.then(() => {
				props.editSideBarGroup({ id: props.groupId, label: newGroupLabelInputState! });
				props.showNotification({
					notificationType: 'checkmark',
					notificationTitle: t('groupCenter.settings.saveChangesNotification.title'),
					notificationMessage: '',
				});
			});
	};

	return (
		<SettingsView
			groupId={props.groupId}
			groupLabel={props.groupLabel}
			newGroupLabelInput={newGroupLabelInputState}
			onNewGroupLabelInputChange={onNewGroupLabelInputChange}
			onSaveChangesButtonClick={onSaveChangesButtonClick}
		/>
	);
};

Settings.displayName = 'Settings';
Settings.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		groupId: state.groups.selectedSideBarGroup!.id,
		groupLabel: state.groups.selectedSideBarGroup!.label,
	};
};

export default connect(mapStateToProps, {
	showNotification: uiActions.showNotification,
	editSideBarGroup: groupsActions.editSideBarGroup,
})(React.memo(Settings));
