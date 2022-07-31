export interface IEnvironment {
	readonly nodeEnv: 'development' | 'production';
	readonly port: string;
	readonly frontendUrl: string;
	readonly cliTokenJwtKey: string;
	readonly refreshTokenJwtKey: string;
	readonly mixpanelToken: string;
}
