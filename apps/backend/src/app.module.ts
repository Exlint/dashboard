import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { appRoutes } from './app.routes';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [UserModule, RouterModule.register(appRoutes)],
})
export class AppModule {}
