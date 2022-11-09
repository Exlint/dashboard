import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type {
	IGetCodeConfigurationResponseData,
	ISetCodeConfigurationDto,
	ISetIsFormConfigurationDto,
} from '@exlint-dashboard/common';
import type { CodeType } from '@prisma/client';
import type { AxiosResponse } from 'axios';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import { backendApi } from '@/utils/http';
import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';

import { fileTypeOptions } from './models/file-type';

import CodeView from './Code.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const Code: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const params = useParams<{ readonly policyId: string }>();

	const [codeInServerState, setCodeInServerState] = useState<string | null>(null);
	const [codeInputState, setCodeInputState] = useState<string | null>(null);
	const [selectedFileTypeIndexState, setSelectedFileTypeIndexState] = useState<number>(0);
	const [serverCodeTypeState, setServerCodeTypeState] = useState<CodeType | null>(null);
	const [isSwitchCheckedState, setIsSwitchCheckedState] = useState<boolean | null>(null);

	const onIsSwitchCheckedChange = async (checked: boolean) => {
		setIsSwitchCheckedState(() => checked);

		await backendApi
			.patch<void, AxiosResponse<void>, ISetIsFormConfigurationDto>(
				`/user/inline-policies/is-form-configuration/${params.policyId}`,
				{ isFormConfiguration: !checked },
			)
			.then(() => {
				props.showNotification({
					notificationType: 'warning',
					notificationTitle: !checked
						? t('formConfiguration.switch.toFormNotificationTitle')
						: t('formConfiguration.switch.toCodeNotificationTitle'),
					notificationMessage: !checked
						? t('formConfiguration.switch.toFormNotificationDescription')
						: t('formConfiguration.switch.toCodeNotificationDescription'),
				});
			})
			.catch(() => {
				setIsSwitchCheckedState(() => !checked);
			});
	};

	const selectedFileTypeValue = useMemo(
		() => fileTypeOptions[selectedFileTypeIndexState],
		[selectedFileTypeIndexState],
	);

	const isSaveChangesDisabled = useMemo(
		() =>
			(codeInServerState ?? '') === (codeInputState ?? '') &&
			selectedFileTypeValue?.value === serverCodeTypeState,
		[codeInServerState, codeInputState, selectedFileTypeValue],
	);

	useEffect(() => {
		backendApi
			.get<IGetCodeConfigurationResponseData>(
				`/user/inline-policies/code-configuration/${params.policyId}`,
			)
			.then((response) => {
				setCodeInServerState(() => response.data.codeConfiguration);
				setCodeInputState(() => response.data.codeConfiguration);
				setServerCodeTypeState(() => response.data.codeType);
				setIsSwitchCheckedState(() => !response.data.isFormConfiguration);

				const codeTypeOptionIndex = fileTypeOptions.findIndex(
					(option) => option.value === response.data.codeType,
				);

				setSelectedFileTypeIndexState(() => (codeTypeOptionIndex === -1 ? 0 : codeTypeOptionIndex));
			});
	}, [backendApi]);

	const onCodeInputChange = (value: string) => setCodeInputState(() => value);

	const onFileTypeSelect = (index: number) => setSelectedFileTypeIndexState(() => index);

	const onSaveChangesClick = () => {
		if (!selectedFileTypeValue) {
			return;
		}

		backendApi
			.patch<void, AxiosResponse<void>, ISetCodeConfigurationDto>(
				`/user/inline-policies/code-configuration/${params.policyId}`,
				{
					code: codeInputState,
					type: selectedFileTypeValue.value,
				},
			)
			.then(() => setCodeInServerState(() => codeInputState))
			.catch(() => {
				return;
			});
	};

	return (
		<CodeView
			codeInput={codeInputState}
			fileTypeOptions={fileTypeOptions}
			isSaveChangesDisabled={isSaveChangesDisabled}
			selectedFileTypeIndex={selectedFileTypeIndexState}
			isSwitchChecked={isSwitchCheckedState}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
			onFileTypeSelect={onFileTypeSelect}
			onCodeInputChange={onCodeInputChange}
			onSaveChangesClick={onSaveChangesClick}
		/>
	);
};

Code.displayName = 'Code';
Code.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Code));
