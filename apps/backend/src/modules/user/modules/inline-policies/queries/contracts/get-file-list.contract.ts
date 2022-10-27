import type { FileListType } from '@/models/file-list';

export class GetFileListContract {
	constructor(readonly policyId: string, readonly type: FileListType) {}
}
