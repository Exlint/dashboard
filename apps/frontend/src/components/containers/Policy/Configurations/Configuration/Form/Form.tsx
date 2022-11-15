import type {
	IGetFormSchemaResponseData,
	ILibraryData,
	ISetIsFormConfigurationDto,
} from '@exlint-dashboard/common';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { AxiosResponse } from 'axios';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import FormView from './Form.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const Form: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const params = useParams<{ readonly policyId: string; readonly groupId: string }>();
	const navigate = useNavigate();

	const [formSchemaState, setFormSchemaState] = useState<ILibraryData['configuration'] | null>(null);
	const [formConfigurationState, setFormConfigurationState] = useState<Record<string, unknown>>({});
	const [nestedkeysState, setNestedkeysState] = useState<string[] | null>(null);
	const [isSubmitDisabledState] = useState<boolean>(true);
	const [isSwitchCheckedState, setIsSwitchCheckedState] = useState<boolean | null>(null);

	const onIsSwitchCheckedChange = async (checked: boolean) => {
		setIsSwitchCheckedState(() => checked);

		await backendApi
			.patch<void, AxiosResponse<void>, ISetIsFormConfigurationDto>(
				`/user/inline-policies/is-form-configuration/${params.policyId}`,
				{ isFormConfiguration: checked },
			)
			.then(() => {
				props.showNotification({
					notificationType: 'warning',
					notificationTitle: checked
						? t('formConfiguration.switch.toFormNotificationTitle')
						: t('formConfiguration.switch.toCodeNotificationTitle'),
					notificationMessage: checked
						? t('formConfiguration.switch.toFormNotificationDescription')
						: t('formConfiguration.switch.toCodeNotificationDescription'),
				});
			})
			.catch(() => {
				setIsSwitchCheckedState(() => !checked);
			});
	};

	const onChangeNestedkeys = (nestedkey: string | null) => {
		if (nestedkey) {
			nestedkeysState
				? setNestedkeysState(() => [...nestedkeysState, nestedkey])
				: setNestedkeysState(() => [nestedkey]);
		} else {
			setNestedkeysState(null);
		}
	};

	console.log(nestedkeysState, 'nestedkeysState');

	const onChangeFormConfiguration = (key: string, value: unknown) => {
		setFormConfigurationState((prevState) => ({ ...prevState, [key]: value }));
	};

	useEffect(() => {
		backendApi
			.get<IGetFormSchemaResponseData>(`/user/inline-policies/form-schema/${params.policyId}`)
			.then((response) => {
				setFormSchemaState(() => response.data.schema);
				setIsSwitchCheckedState(() => response.data.isFormConfiguration);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi]);

	return (
		<FormView
			formSchema={formSchemaState}
			formConfiguration={formConfigurationState}
			nestedKeys={nestedkeysState}
			isSubmitDisabled={isSubmitDisabledState}
			isSwitchChecked={isSwitchCheckedState}
			onChangeNestedkeys={onChangeNestedkeys}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
			onChangeFormConfiguration={onChangeFormConfiguration}
		/>
	);
};

Form.displayName = 'Form';
Form.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Form));
