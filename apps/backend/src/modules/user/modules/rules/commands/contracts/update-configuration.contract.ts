import type { Prisma } from '@prisma/client';

export class UpdateConfigurationContract {
	constructor(public readonly ruleId: string, public readonly configuration: Prisma.JsonArray) {}
}
