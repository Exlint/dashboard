import React, { type FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import type { AxiosResponse } from 'axios';
import type { IEditComplianceLabelDto } from '@exlint.io/common';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import type { AppState } from '@/store/app';
import { compliancesActions } from '@/store/reducers/compliances';
import type { IEditSideBarComplianceLabelPayload } from '@/store/interfaces/compliances';

import SettingsView from './Settings.view';

interface IPropsFromState {
	readonly complianceId: string;
	readonly complianceLabel: string;
}

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
	readonly editSideBarCompliance: (
		editSideBarCompliancePayload: IEditSideBarComplianceLabelPayload,
	) => PayloadAction<IEditSideBarComplianceLabelPayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const Settings: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const [newComplianceLabelInputState, setNewComplianceLabelInputState] = useState<string | null>(null);

	const onNewComplianceLabelInputChange = (value: string) => setNewComplianceLabelInputState(() => value);

	const onSaveChangesButtonClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newComplianceLabelInputState === props.complianceLabel) {
			props.showNotification({
				notificationType: 'checkmark',
				notificationTitle: t('complianceCenter.settings.saveChangesNotification.title'),
				notificationMessage: '',
			});

			return;
		}

		backendApi
			.patch<void, AxiosResponse<void>, IEditComplianceLabelDto>(
				`/user/compliances/label/${props.complianceId}`,
				{
					label: newComplianceLabelInputState!,
				},
			)
			.then(() => {
				props.editSideBarCompliance({ id: props.complianceId, label: newComplianceLabelInputState! });
				props.showNotification({
					notificationType: 'checkmark',
					notificationTitle: t('complianceCenter.settings.saveChangesNotification.title'),
					notificationMessage: '',
				});
			});
	};

	return (
		<SettingsView
			complianceId={props.complianceId}
			complianceLabel={props.complianceLabel}
			newComplianceLabelInput={newComplianceLabelInputState}
			onNewComplianceLabelInputChange={onNewComplianceLabelInputChange}
			onSaveChangesButtonClick={onSaveChangesButtonClick}
		/>
	);
};

Settings.displayName = 'Settings';
Settings.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		complianceId: state.compliances.selectedSideBarCompliance!.id,
		complianceLabel: state.compliances.selectedSideBarCompliance!.label,
	};
};

export default connect(mapStateToProps, {
	showNotification: uiActions.showNotification,
	editSideBarCompliance: compliancesActions.editSideBarCompliance,
})(React.memo(Settings));
