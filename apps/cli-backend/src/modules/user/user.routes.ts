import type { Routes } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
import { GroupsModule } from './modules/groups/groups.module';

export const userRoutes: Routes = [
	{
		path: '/',
		module: AuthModule,
	},
	{
		path: '/',
		module: GroupsModule,
	},
];
