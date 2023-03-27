import type { FilesListType } from '@exlint.io/common';

export class GetFilesListContract {
	constructor(public readonly policyId: string, public readonly type: FilesListType) {}
}
