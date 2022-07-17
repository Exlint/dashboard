export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
}

export interface IRefreshTokenResponseData {
	readonly accessToken: string;
}
