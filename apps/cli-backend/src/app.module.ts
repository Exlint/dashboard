import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, RouterModule } from '@nestjs/core';

import { appRoutes } from './app.routes';
import EnvConfiguration from './config/configuration';
import { validate } from './config/env.validation';
import { CliTokenGuard } from './guards/cli-token.guard';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { CliTokenStrategy } from './strategies/cli-token.strategy';

@Module({
	imports: [
		DatabaseModule,
		UserModule,
		RouterModule.register(appRoutes),
		ConfigModule.forRoot({
			load: [EnvConfiguration],
			isGlobal: true,
			cache: true,
			validate,
			validationOptions: {
				allowUnknown: false,
				abortEarly: true,
			},
		}),
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: CliTokenGuard,
		},
		CliTokenStrategy,
	],
})
export class AppModule {}
