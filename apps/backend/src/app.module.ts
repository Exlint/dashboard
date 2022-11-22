import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';

import { validate } from './config/env.validation';
import { appRoutes } from './app.routes';
import EnvConfiguration from './config/configuration';
import { AccessTokenGuard } from './guards/access-token.guard';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { HealthModule } from './modules/health/health.module';
import { VersionController } from './modules/health/version.controller';

@Module({
	imports: [
		DatabaseModule,
		RouterModule.register(appRoutes),
		UserModule,
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
		HealthModule,
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 15,
		}),
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AccessTokenGuard,
		},
		AccessTokenStrategy,
	],
	controllers: [VersionController],
})
export class AppModule {}
