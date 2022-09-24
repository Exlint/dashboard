export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
	readonly createdAt: number;
}

export interface IRefreshTokenResponseData {
	readonly accessToken: string;
}

export interface ICliAuthResponseData {
	readonly cliToken: string;
	readonly email: string;
}
