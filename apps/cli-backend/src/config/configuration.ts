import type { IEnvironment } from './env.interface';

const EnvConfiguration = (): IEnvironment => ({
	nodeEnv: process.env.NODE_ENV,
	port: process.env.PORT,
	frontendUrl: process.env.FRONTEND_URL,
	cliTokenJwtKey: process.env.CLI_TOKEN_JWT_KEY,
	refreshTokenJwtKey: process.env.REFRESH_TOKEN_JWT_KEY,
	mixpanelToken: process.env.MIXPANEL_TOKEN,
});

export default EnvConfiguration;
