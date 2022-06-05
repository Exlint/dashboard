import { Routes } from '@nestjs/core';

import { AuthModule } from './modules/user/modules/auth/auth.module';
import { SecretsModule } from './modules/user/modules/secrets/secrets.module';

export const appRoutes: Routes = [
	{
		path: 'user',
		module: AuthModule,
	},
	{
		path: 'user',
		module: SecretsModule,
	},
];
