import type { PolicyLibrary } from '@prisma/client';

export class ComplianceHasLibraryContract {
	constructor(readonly complianceId: string, readonly library: PolicyLibrary) {}
}
