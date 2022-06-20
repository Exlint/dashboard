export interface IEnvironment {
	readonly nodeEnv: 'development' | 'production';
	readonly port: string;
	readonly jwtKey: string;
	readonly googleOAuthClientId: string;
	readonly googleOAuthClientSecret: string;
	readonly googleOAuthRedirectUri: string;
	readonly githubOAuthClientId: string;
	readonly githubOAuthClientSecret: string;
	readonly githubOAuthRedirectUri: string;
}
