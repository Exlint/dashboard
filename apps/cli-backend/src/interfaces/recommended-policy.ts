import type { PolicyLibrary, Prisma } from '@prisma/client';

export interface IRecommendedPolicy {
	readonly library: PolicyLibrary;
	readonly configuration: Prisma.JsonValue;
	readonly lintedList: string[];
	readonly ignoredList: string[];
}
