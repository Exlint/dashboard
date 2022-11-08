import type { FilesListType } from '@exlint-dashboard/common';

export class GetFilesListContract {
	constructor(readonly policyId: string, readonly type: FilesListType) {}
}
