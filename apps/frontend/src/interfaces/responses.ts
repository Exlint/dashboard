import type { ISecrets } from './secrets';

export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
}

export interface IRefreshTokenResponseData {
	readonly accessToken: string;
}

export interface ICliAuthResponseData {
	readonly cliToken: string;
	readonly email: string;
}

export interface IGetSecretsResponseData {
	readonly secrets: ISecrets[];
}

export interface ICreateSecretResponseData {
	readonly clientSecret: string;
}
