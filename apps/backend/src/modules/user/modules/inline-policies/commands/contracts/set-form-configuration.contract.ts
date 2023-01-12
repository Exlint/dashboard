import type { Prisma } from '@prisma/client';

export class SetFormConfigurationContract {
	constructor(public readonly policyId: string, public readonly data: Prisma.JsonValue) {}
}
