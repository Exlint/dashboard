import type { PolicyLibrary } from '@prisma/client';

export class GetPolicyRulesContract {
	constructor(
		public readonly policyId: string,
		public readonly library: PolicyLibrary,
		public readonly page?: string,
	) {}
}
