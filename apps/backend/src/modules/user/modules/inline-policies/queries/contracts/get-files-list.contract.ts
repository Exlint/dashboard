import type { FilesListType } from '@exlint.io/common';

export class GetFilesListContract {
	constructor(readonly policyId: string, readonly type: FilesListType) {}
}
