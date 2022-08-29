import type { IPolicyData } from '@/interfaces/libraries';

export interface IGroup {
	readonly id: string;
	readonly label: string;
	readonly inlinePolicies: IPolicyData[];
}
