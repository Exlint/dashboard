import type { FilesListType } from '@exlint.io/common';

export class SetFilesListContract {
	constructor(
		public readonly policyId: string,
		public readonly filesList: string,
		public readonly type: FilesListType,
	) {}
}
