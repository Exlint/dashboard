import type { PolicyLibrary } from '@prisma/client';

export class GroupHasLibraryContract {
	constructor(readonly groupId: string, readonly library: PolicyLibrary) {}
}
