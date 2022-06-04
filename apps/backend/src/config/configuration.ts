import { IEnvironment } from './env.interface';

const EnvConfiguration = (): IEnvironment => ({
	nodeEnv: process.env.NODE_ENV,
	port: process.env.PORT,
	accessTokenJwtKey: process.env.ACCESS_TOKEN_JWT_KEY,
	refreshTokenJwtKey: process.env.REFRESH_TOKEN_JWT_KEY,
	googleOAuthClientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
	googleOAuthClientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
	googleOAuthRedirectUri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
	githubOAuthClientId: process.env.GITHUB_OAUTH_CLIENT_ID,
	githubOAuthClientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
	githubOAuthRedirectUri: process.env.GITHUB_OAUTH_REDIRECT_URI,
});

export default EnvConfiguration;
