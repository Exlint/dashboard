import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';

import { appRoutes } from './app.routes';
import { AccessTokenGuard } from './guards/access-token.guard';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AccessTokenStrategy } from './strategies/access-token.strategy';

@Module({
	imports: [DatabaseModule, RouterModule.register(appRoutes), UserModule],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AccessTokenGuard,
		},
		AccessTokenStrategy,
	],
})
export class AppModule {}
