import type { FileType } from '@/models/file-type';

export class SetCodeConfigurationContract {
	constructor(
		public readonly policyId: string,
		public readonly code: string | null,
		public readonly type: FileType,
	) {}
}
