import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { CodeType } from '@/models/code-type';

import type { IGetCodeConfigurationResponseData } from './interfaces/responses';
import { fileTypeOptions } from './models/file-type';

import CodeView from './Code.view';

interface IProps {}

const Code: React.FC<IProps> = () => {
	const params = useParams<{ readonly policyId: string }>();

	const [codeInServerState, setCodeInServerState] = useState<string | null>(null);
	const [codeInputState, setCodeInputState] = useState<string | null>(null);
	const [selectedFileTypeIndexState, setSelectedFileTypeIndexState] = useState<number>(0);
	const [serverCodeTypeState, setServerCodeTypeState] = useState<CodeType | null>(null);

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
			.patch(`/user/inline-policies/code-configuration/${params.policyId}`, {
				code: codeInputState,
				type: selectedFileTypeValue.value,
			})
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
			onFileTypeSelect={onFileTypeSelect}
			onCodeInputChange={onCodeInputChange}
			onSaveChangesClick={onSaveChangesClick}
		/>
	);
};

Code.displayName = 'Code';
Code.defaultProps = {};

export default React.memo(Code);
