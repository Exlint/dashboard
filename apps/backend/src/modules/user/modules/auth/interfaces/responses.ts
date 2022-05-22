interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IRegisterResponse extends ITokens {}

export interface ILoginResponse extends ITokens {
	name: string;
}
