import { IPolicy } from '@/interfaces/policy';

export interface IGroup {
	readonly id: string;
	readonly label: string;
	readonly createdAt: string;
	readonly policies: IPolicy[];
}
