export interface ISecrets {
	readonly id: string;
	readonly number: number;
	readonly createdAt: number;
	readonly expiration: number;
	readonly label: string;
	readonly key: string;
}
