import type { PolicyLibrary } from '@prisma/client';

export interface IPolicy {
	readonly id: string;
	readonly label: string;
	readonly library: PolicyLibrary;
	readonly language: string;
}

export interface IGetPolicies {
	readonly description: string | null;
	readonly count: number;
	readonly inlinePolicies: IPolicy[];
}
