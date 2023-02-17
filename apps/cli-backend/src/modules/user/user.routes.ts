import type { Routes } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
import { CompliancesModule } from './modules/compliances/compliances.module';

export const userRoutes: Routes = [
	{
		path: '/',
		module: AuthModule,
	},
	{
		path: '/',
		module: CompliancesModule,
	},
];
