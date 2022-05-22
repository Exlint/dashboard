import { IEnvironment } from './env.interface';

const EnvConfiguration = (): IEnvironment => ({
	port: process.env.PORT,
	accessTokenJwtKey: process.env.ACCESS_TOKEN_JWT_KEY,
	refreshTokenJwtKey: process.env.REFRESH_TOKEN_JWT_KEY,
});

export default EnvConfiguration;
