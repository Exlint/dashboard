export interface IAvailableLabelResponse {
	readonly isAvailable: boolean;
}

export interface ICreateSecretResponse {
	readonly secretId: string;
	readonly secretValue: string;
}
