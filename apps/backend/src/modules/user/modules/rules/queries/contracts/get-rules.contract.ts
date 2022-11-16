import type { PolicyLibrary } from '@prisma/client';

export class GetRulesContract {
	constructor(public readonly policyId: string, public readonly policyLibrary: PolicyLibrary) {}
}
