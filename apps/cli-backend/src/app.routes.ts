import { Routes } from '@nestjs/core';

import { UserModule } from './modules/user/user.module';
import { userRoutes } from './modules/user/user.routes';

export const appRoutes: Routes = [
	{
		path: 'user',
		module: UserModule,
		children: userRoutes,
	},
];
