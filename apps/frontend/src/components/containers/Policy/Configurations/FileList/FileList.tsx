import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IGetFileListResponseData } from '@exlint-dashboard/common';

import { backendApi } from '@/utils/http';

import type { IFileType } from './interface/file-list';

import FileListView from './FileList.view';

interface IProps {
	readonly type: IFileType;
}

const FileList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly policyId: string }>();

	const [fileListState, setFileListState] = useState<string | null>(null);
	const [fileListInputState, setFileListInputState] = useState<string | null>(null);

	const isSaveChangesDisabled = useMemo(
		() => fileListState === fileListInputState,
		[fileListState, fileListInputState],
	);

	useEffect(() => {
		backendApi
			.get<IGetFileListResponseData>(`/user/inline-policies/file-list/${params.policyId}/${props.type}`)
			.then((response) => {
				setFileListState(() => response.data.fileList.join('\n'));
				setFileListInputState(() => response.data.fileList.join('\n'));
			});
	}, [backendApi]);

	const onFileListInputChange = (value: string) => setFileListInputState(() => value);

	const onSaveChangesClick = () => {
		backendApi
			.patch(`/user/inline-policies/file-list/${params.policyId}`, {
				fileList: fileListInputState,
				type: +props.type,
			})
			.then(() => setFileListState(() => fileListInputState))
			.catch(() => {
				return;
			});
	};

	return (
		<FileListView
			fileListInput={fileListInputState}
			isSaveChangesDisabled={isSaveChangesDisabled}
			onFileListInputChange={onFileListInputChange}
			onSaveChangesClick={onSaveChangesClick}
		/>
	);
};

FileList.displayName = 'FileList';
FileList.defaultProps = {};

export default React.memo(FileList);
