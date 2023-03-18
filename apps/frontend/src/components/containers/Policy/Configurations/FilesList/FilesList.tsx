import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IGetFilesListResponseData, FilesListType, ISetFilesListDto } from '@exlint.io/common';

import BackendService from '@/services/backend';

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
		BackendService.get<IGetFilesListResponseData>(
			`/user/inline-policies/files-list/${params.policyId}/${props.type}`,
		).then((responseData) => {
			setFileListState(() => responseData.filesList.join('\n'));
			setFileListInputState(() => responseData.filesList.join('\n'));
		});
	}, []);

	const onFileListInputChange = (value: string) => setFileListInputState(() => value);

	const onSaveChangesClick = async () => {
		try {
			await BackendService.patch<void, ISetFilesListDto>(
				`/user/inline-policies/files-list/${params.policyId}`,
				{
					filesList: fileListInputState ?? '',
					type: props.type,
				},
			);

			setFileListState(() => fileListInputState);
		} catch {
			return;
		}
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
