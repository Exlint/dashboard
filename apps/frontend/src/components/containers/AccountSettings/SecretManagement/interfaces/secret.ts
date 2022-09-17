export interface ISecret {
	readonly id: string;
	readonly label: string;
	readonly expiration: number | null;
}

export interface IGetAllSecretsResponse {
	readonly secrets: ISecret[];
}

export interface ISecretDetails {
	readonly secretId: string;
	readonly secretValue: string;
}
