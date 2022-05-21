import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';

import { validate } from './config/env.validation';
import EnvConfiguration from './config/configuration';
import { appRoutes } from './app.routes';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [
		DatabaseModule,
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
		RouterModule.register(appRoutes),
		UserModule,
	],
})
export class AppModule {}
