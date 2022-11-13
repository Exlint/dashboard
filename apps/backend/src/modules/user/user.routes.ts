import type { Routes } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
import { GroupsModule } from './modules/groups/groups.module';
import { InlinePoliciesModule } from './modules/inline-policies/inline-policies.module';
import { RuleModule } from './modules/rules/rules.module';
import { SecretsModule } from './modules/secrets/secrets.module';

export const userRoutes: Routes = [
	{
		path: '/',
		module: AuthModule,
	},
	{
		path: '/',
		module: SecretsModule,
	},
	{
		path: '/',
		module: GroupsModule,
	},
	{
		path: '/',
		module: InlinePoliciesModule,
	},
	{
		path: '/',
		module: RuleModule,
	},
];
