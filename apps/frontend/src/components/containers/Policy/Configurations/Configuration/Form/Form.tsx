import type {
	IGetFormSchemaResponseData,
	ILibraryData,
	ISetFormConfigurationDto,
	ISetIsFormConfigurationDto,
} from '@exlint.io/common';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { AxiosResponse } from 'axios';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import type { Prisma } from '@prisma/client';
import type { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

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
	const [formConfigurationState, setFormConfigurationState] = useState<Prisma.JsonValue>(null);
	const [isFormValidState, setIsFormValidState] = useState<boolean>(false);
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

	useEffect(() => {
		backendApi
			.get<IGetFormSchemaResponseData>(`/user/inline-policies/form-schema/${params.policyId}`)
			.then((response) => {
				setFormSchemaState(() => response.data.schema);
				setIsSwitchCheckedState(() => response.data.isFormConfiguration);
				setFormConfigurationState(() => response.data.formConfiguration);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi]);

	const onFormChange = (data: IChangeEvent) => {
		setIsFormValidState(() => validator.isValid(formSchemaState!, data.formData, formSchemaState!));
		setFormConfigurationState(() => data.formData);
	};

	const onFormSubmit = () => {
		backendApi
			.patch<void, AxiosResponse<void>, ISetFormConfigurationDto>(
				`/user/inline-policies/form-configuration/${params.policyId}`,
				{ data: formConfigurationState },
			)
			.then(() => setIsFormValidState(() => false));
	};

	return (
		<FormView
			formSchema={formSchemaState}
			formConfiguration={formConfigurationState}
			isSwitchChecked={isSwitchCheckedState}
			isFormValid={isFormValidState}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
			onFormChange={onFormChange}
			onFormSubmit={onFormSubmit}
		/>
	);
};

Form.displayName = 'Form';
Form.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Form));
