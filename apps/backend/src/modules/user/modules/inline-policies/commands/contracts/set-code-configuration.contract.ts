import type { CodeType } from '@prisma/client';

export class SetCodeConfigurationContract {
	constructor(
		public readonly policyId: string,
		public readonly code: string | null,
		public readonly type: CodeType,
	) {}
}
