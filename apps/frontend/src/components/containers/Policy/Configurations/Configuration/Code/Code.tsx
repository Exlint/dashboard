import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';

import type { IGetCodeResponseData } from './interfaces/responses';
import { fileTypeOptions } from './models/file-type';

import CodeView from './Code.view';

interface IProps {}

const Code: React.FC<IProps> = () => {
	const params = useParams<{ readonly policyId: string }>();

	const [codeInServerState, setCodeInServerState] = useState<string | null>(null);
	const [codeInputState, setCodeInputState] = useState<string | null>(null);
	const [selectedFileTypeIndexState, setSelectedFileTypeIndexState] = useState<number>(0);

	const isSaveChangesDisabled = useMemo(
		() => (codeInServerState ?? '') === codeInputState,
		[codeInServerState, codeInputState],
	);

	const selectedFileTypeValue = useMemo(
		() => fileTypeOptions[selectedFileTypeIndexState],
		[selectedFileTypeIndexState],
	);

	useEffect(() => {
		backendApi
			.get<IGetCodeResponseData>(`/user/inline-policies/configuration/${params.policyId}`)
			.then((response) => {
				const stringConfiguration =
					response.data.configuration && JSON.stringify(response.data.configuration, null, 2);

				setCodeInServerState(() => stringConfiguration);
				setCodeInputState(() => stringConfiguration);
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
				type: selectedFileTypeValue,
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
