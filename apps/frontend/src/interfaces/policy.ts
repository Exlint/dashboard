import { IRule } from './rule';

export interface IPolicy {
	readonly id: string;
	readonly label: string;
	readonly libraryName: string;
	readonly createdAt: string;
	readonly rules: Record<string, IRule> | null;
}
