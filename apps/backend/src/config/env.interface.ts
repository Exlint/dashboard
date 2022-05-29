export interface IEnvironment {
	readonly port: string;
	readonly accessTokenJwtKey: string;
	readonly refreshTokenJwtKey: string;
	readonly googleOAuthClientId: string;
	readonly googleOAuthClientSecret: string;
	readonly googleOAuthRedirectUri: string;
}
