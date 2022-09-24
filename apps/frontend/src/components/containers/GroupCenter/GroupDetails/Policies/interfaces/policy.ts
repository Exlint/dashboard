import type { ILibraryName } from '@/interfaces/libraries';

export interface IPolicy {
	readonly id: string;
	readonly label: string;
	readonly library: ILibraryName;
	readonly language: string;
}

export interface IGetPolicies {
	readonly description: string | null;
	readonly count: number;
	readonly inlinePolicies: IPolicy[];
}
