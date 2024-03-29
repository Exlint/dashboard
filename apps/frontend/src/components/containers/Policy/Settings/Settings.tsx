import React, { type FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { useOutletContext, useParams } from 'react-router-dom';
import type { IEditPolicyLabelDto } from '@exlint.io/common';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import BackendService from '@/services/backend';

import SettingsView from './Settings.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const Settings: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const [policyLabel, onSetPolicyLabel] = useOutletContext<[string | null, (value: string) => void]>();
	const params = useParams<{ readonly policyId: string }>();

	const [newPolicyLabelInputState, setNewPolicyLabelInputState] = useState<string | null>(null);

	const onNewPolicyLabelInputChange = (value: string) => setNewPolicyLabelInputState(() => value);

	const onSaveChangesButtonClick = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newPolicyLabelInputState === policyLabel) {
			props.showNotification({
				notificationType: 'checkmark',
				notificationTitle: t('policy.settings.saveChangesNotification.title'),
				notificationMessage: '',
			});

			return;
		}

		await BackendService.patch<void, IEditPolicyLabelDto>(
			`/user/inline-policies/label/${params.policyId}`,
			{ label: newPolicyLabelInputState! },
		);

		onSetPolicyLabel(newPolicyLabelInputState!);
		props.showNotification({
			notificationType: 'checkmark',
			notificationTitle: t('policy.settings.saveChangesNotification.title'),
			notificationMessage: '',
		});
	};

	return (
		<SettingsView
			policyLabel={policyLabel}
			newPolicyLabelInput={newPolicyLabelInputState}
			onNewPolicyLabelInputChange={onNewPolicyLabelInputChange}
			onSaveChangesButtonClick={onSaveChangesButtonClick}
		/>
	);
};

Settings.displayName = 'Settings';
Settings.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Settings));
