import type { FileListType } from '@/models/file-list';

export class SetFileListContract {
	constructor(
		public readonly policyId: string,
		public readonly fileList: string,
		public readonly type: FileListType,
	) {}
}
