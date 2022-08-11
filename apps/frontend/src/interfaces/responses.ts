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

export interface ISecretsResponseData {
	readonly createdAt: number;
	readonly expiration: number;
	readonly id: string;
	readonly label: string;
}
