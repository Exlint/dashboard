import { IPolicy } from './policy';

export interface IGroup {
	readonly label: string;
	readonly id: string;
	readonly createdAt: string;
	readonly policies: IPolicy[];
}
