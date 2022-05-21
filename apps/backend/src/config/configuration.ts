import { IEnvironment } from './env.interface';

const EnvConfiguration = (): IEnvironment => ({
	jwtKey: process.env.JWT_KEY,
});

export default EnvConfiguration;
