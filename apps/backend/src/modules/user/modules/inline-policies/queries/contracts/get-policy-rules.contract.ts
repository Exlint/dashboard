import type { PolicyLibrary } from '@prisma/client';

export class GetPolicyRulesContract {
	constructor(readonly policyId: string, readonly library: PolicyLibrary, readonly page?: string) {}
}
