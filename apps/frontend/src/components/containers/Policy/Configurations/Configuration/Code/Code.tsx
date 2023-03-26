import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type {
	IGetCodeConfigurationResponseData,
	ISetCodeConfigurationDto,
	ISetIsFormConfigurationDto,
} from '@exlint.io/common';
import type { CodeType } from '@prisma/client';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import BackendService from '@/services/backend';

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

		try {
			await BackendService.patch<void, ISetIsFormConfigurationDto>(
				`/user/inline-policies/is-form-configuration/${params.policyId}`,
				{ isFormConfiguration: !checked },
			);

			props.showNotification({
				notificationType: 'warning',
				notificationTitle: !checked
					? t('formConfiguration.switch.toFormNotificationTitle')
					: t('formConfiguration.switch.toCodeNotificationTitle'),
				notificationMessage: !checked
					? t('formConfiguration.switch.toFormNotificationDescription')
					: t('formConfiguration.switch.toCodeNotificationDescription'),
			});
		} catch {
			setIsSwitchCheckedState(() => !checked);
		}
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
		BackendService.get<IGetCodeConfigurationResponseData>(
			`/user/inline-policies/code-configuration/${params.policyId}`,
		).then((responseData) => {
			setCodeInServerState(() => responseData.codeConfiguration);
			setCodeInputState(() => responseData.codeConfiguration);
			setServerCodeTypeState(() => responseData.codeType);
			setIsSwitchCheckedState(() => !responseData.isFormConfiguration);

			const codeTypeOptionIndex = fileTypeOptions.findIndex(
				(option) => option.value === responseData.codeType,
			);

			setSelectedFileTypeIndexState(() => (codeTypeOptionIndex === -1 ? 0 : codeTypeOptionIndex));
		});
	}, []);

	const onCodeInputChange = (value: string) => setCodeInputState(() => value);

	const onFileTypeSelect = (index: number) => setSelectedFileTypeIndexState(() => index);

	const onSaveChangesClick = async () => {
		if (!selectedFileTypeValue) {
			return;
		}

		try {
			await BackendService.patch<void, ISetCodeConfigurationDto>(
				`/user/inline-policies/code-configuration/${params.policyId}`,
				{
					code: codeInputState,
					type: selectedFileTypeValue.value,
				},
			);

			setCodeInServerState(() => codeInputState);
		} catch {
			return;
		}
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
