import type { PolicyLibrary } from '@prisma/client';

export class ComplianceHasLibraryContract {
	constructor(public readonly complianceId: string, public readonly library: PolicyLibrary) {}
}
