import { plainToClass } from 'class-transformer';
import { IsEnum, IsString, validateSync } from 'class-validator';

enum Environment {
	Development = 'development',
	Production = 'production',
}

class EnvironmentVariables {
	@IsEnum(Environment)
	public NODE_ENV!: Environment;

	@IsString()
	public JWT_KEY!: string;
}

export const validate = (config: Record<string, unknown>) => {
	const validatedConfig = plainToClass(EnvironmentVariables, config, { enableImplicitConversion: true });
	const errors = validateSync(validatedConfig, { skipMissingProperties: false });

	if (errors.length > 0) {
		throw new Error(errors.toString());
	}

	return validatedConfig;
};
