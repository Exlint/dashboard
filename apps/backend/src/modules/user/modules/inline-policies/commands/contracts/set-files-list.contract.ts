import type { FilesListType } from '@exlint-dashboard/common';

export class SetFilesListContract {
	constructor(
		public readonly policyId: string,
		public readonly filesList: string,
		public readonly type: FilesListType,
	) {}
}
