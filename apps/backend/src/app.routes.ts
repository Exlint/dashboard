import { Routes } from '@nestjs/core';
import { AuthModule } from './modules/user/modules/auth/auth.module';

export const appRoutes: Routes = [
	{
		path: 'user',
		module: AuthModule,
	},
];
