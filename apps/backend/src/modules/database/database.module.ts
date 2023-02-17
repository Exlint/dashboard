import { Global, Module } from '@nestjs/common';

import { DBClientSecretService } from './client-secret.service';
import { DBComplianceService } from './compliance.service';
import { DBInlinePolicyService } from './inline-policy.service';
import { PrismaService } from './prisma.service';
import { DBRuleService } from './rule.service';
import { DBUserService } from './user.service';

@Global()
@Module({
	providers: [
		PrismaService,
		DBUserService,
		DBClientSecretService,
		DBComplianceService,
		DBInlinePolicyService,
		DBRuleService,
	],
	exports: [
		DBUserService,
		DBClientSecretService,
		DBComplianceService,
		DBInlinePolicyService,
		DBRuleService,
	],
})
export class DatabaseModule {}
