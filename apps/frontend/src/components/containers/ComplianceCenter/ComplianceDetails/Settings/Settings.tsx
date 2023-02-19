import React, { type FormEvent, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import type { AxiosResponse } from 'axios';
import type { IEditComplianceLabelDto, IGetAllCompliancesResponseData } from '@exlint.io/common';
import { useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import useBackend from '@/hooks/use-backend';

import SettingsView from './Settings.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const Settings: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const params = useParams<{ readonly complianceId: string }>();

	const { data: getAllCompliancesResponseData, mutate: getAllCompliancesMutate } =
		useBackend<IGetAllCompliancesResponseData>('/user/compliances');

	const selectedCompliance = useMemo(() => {
		if (!getAllCompliancesResponseData) {
			return null;
		}

		const matchingCompliance = getAllCompliancesResponseData.compliances.find(
			(compliance) => compliance.id === params.complianceId,
		);

		return matchingCompliance ?? null;
	}, [params, getAllCompliancesResponseData]);

	const [newComplianceLabelInputState, setNewComplianceLabelInputState] = useState<string | null>(null);

	if (!selectedCompliance) {
		return null;
	}

	const onNewComplianceLabelInputChange = (value: string) => setNewComplianceLabelInputState(() => value);

	const onSaveChangesButtonClick = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newComplianceLabelInputState === selectedCompliance.label) {
			props.showNotification({
				notificationType: 'checkmark',
				notificationTitle: t('complianceCenter.settings.saveChangesNotification.title'),
				notificationMessage: '',
			});

			return;
		}

		await getAllCompliancesMutate(
			async (currentData) => {
				if (!currentData) {
					return;
				}

				await backendApi.patch<void, AxiosResponse<void>, IEditComplianceLabelDto>(
					`/user/compliances/label/${selectedCompliance.id}`,
					{
						label: newComplianceLabelInputState!,
					},
				);

				const matchingCompliance = currentData.compliances.find(
					(compliance) => compliance.id === params.complianceId,
				);

				if (matchingCompliance) {
					matchingCompliance.label = newComplianceLabelInputState!;
				}

				return currentData;
			},
			{
				optimisticData: (currentData) => {
					if (!currentData) {
						return { compliances: [] };
					}

					const matchingCompliance = currentData.compliances.find(
						(compliance) => compliance.id === params.complianceId,
					);

					if (matchingCompliance) {
						matchingCompliance.label = newComplianceLabelInputState!;
					}

					return currentData;
				},
				throwOnError: true,
				rollbackOnError: true,
			},
		);

		props.showNotification({
			notificationType: 'checkmark',
			notificationTitle: t('complianceCenter.settings.saveChangesNotification.title'),
			notificationMessage: '',
		});
	};

	return (
		<SettingsView
			complianceId={selectedCompliance.id}
			complianceLabel={selectedCompliance.label}
			newComplianceLabelInput={newComplianceLabelInputState}
			onNewComplianceLabelInputChange={onNewComplianceLabelInputChange}
			onSaveChangesButtonClick={onSaveChangesButtonClick}
		/>
	);
};

Settings.displayName = 'Settings';
Settings.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Settings));
