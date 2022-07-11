export interface IEnvironment {
	readonly nodeEnv: 'development' | 'production';
	readonly port: string;
	readonly accessTokenJwtKey: string;
	readonly refreshTokenJwtKey: string;
	readonly googleOAuthClientId: string;
	readonly googleOAuthClientSecret: string;
	readonly googleOAuthRedirectUri: string;
	readonly githubOAuthClientId: string;
	readonly githubOAuthClientSecret: string;
	readonly githubOAuthRedirectUri: string;
	readonly mixpanelToken: string;
	readonly frontendUrl: string;
}
