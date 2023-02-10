import type { Prisma } from '@prisma/client';

export interface IRecommendedPolicy {
	readonly library: string;
	readonly configuration: Prisma.JsonValue;
	readonly lintedList: string[];
	readonly ignoredList: string[];
}
