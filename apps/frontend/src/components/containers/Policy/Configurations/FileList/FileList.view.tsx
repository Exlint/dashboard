import React from 'react';

import EDTextCode from '@/ui/EDTextCode';

interface IProps {
	readonly fileListInput: string | null;
	readonly isSaveChangesDisabled: boolean;
	readonly onFileListInputChange: (value: string) => void;
	readonly onSaveChangesClick: VoidFunction;
}

const FileListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDTextCode
			input={props.fileListInput}
			isSubmitDisabled={props.isSaveChangesDisabled}
			onInputChange={props.onFileListInputChange}
			onSubmit={props.onSaveChangesClick}
		/>
	);
};

FileListView.displayName = 'FileListView';
FileListView.defaultProps = {};

export default React.memo(FileListView);
