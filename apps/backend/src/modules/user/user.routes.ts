import type { Routes } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
import { CompliancesModule } from './modules/compliances/compliances.module';
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
		module: CompliancesModule,
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
