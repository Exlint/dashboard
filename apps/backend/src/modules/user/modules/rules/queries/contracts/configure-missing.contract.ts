import type { PolicyLibrary, Prisma } from '@prisma/client';

export class ConfigureMissingContract {
	constructor(
		public readonly policyId: string,
		public readonly name: string,
		public readonly configuration: Prisma.JsonArray,
		public readonly policyLibrary: PolicyLibrary,
	) {}
}
