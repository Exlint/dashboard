import type { PolicyLibrary } from '@prisma/client';

export class EnableRuleContract {
	constructor(
		public readonly policyId: string,
		public readonly name: string,
		public readonly policyLibrary: PolicyLibrary,
	) {}
}
