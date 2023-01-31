import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IGetFilesListResponseData, FilesListType, ISetFilesListDto } from '@exlint.io/common';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';

import FilesListView from './FilesList.view';

interface IProps {
	readonly type: FilesListType;
}

const FilesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly policyId: string }>();

	const [fileListState, setFileListState] = useState<string | null>(null);
	const [fileListInputState, setFileListInputState] = useState<string | null>(null);

	const isSaveChangesDisabled = useMemo(
		() => fileListState === fileListInputState,
		[fileListState, fileListInputState],
	);

	useEffect(() => {
		backendApi
			.get<IGetFilesListResponseData>(
				`/user/inline-policies/files-list/${params.policyId}/${props.type}`,
			)
			.then((response) => {
				setFileListState(() => response.data.filesList.join('\n'));
				setFileListInputState(() => response.data.filesList.join('\n'));
			});
	}, [backendApi]);

	const onFileListInputChange = (value: string) => setFileListInputState(() => value);

	const onSaveChangesClick = () => {
		backendApi
			.patch<void, AxiosResponse<void>, ISetFilesListDto>(
				`/user/inline-policies/files-list/${params.policyId}`,
				{
					filesList: fileListInputState ?? '',
					type: props.type,
				},
			)
			.then(() => setFileListState(() => fileListInputState))
			.catch(() => {
				return;
			});
	};

	return (
		<FilesListView
			fileListInput={fileListInputState}
			isSaveChangesDisabled={isSaveChangesDisabled}
			onFileListInputChange={onFileListInputChange}
			onSaveChangesClick={onSaveChangesClick}
		/>
	);
};

FilesList.displayName = 'FilesList';
FilesList.defaultProps = {};

export default React.memo(FilesList);
