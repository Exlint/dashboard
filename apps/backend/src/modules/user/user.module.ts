import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { CompliancesModule } from './modules/compliances/compliances.module';
import { InlinePoliciesModule } from './modules/inline-policies/inline-policies.module';
import { RuleModule } from './modules/rules/rules.module';
import { SecretsModule } from './modules/secrets/secrets.module';

@Module({
	imports: [AuthModule, SecretsModule, CompliancesModule, InlinePoliciesModule, RuleModule],
})
export class UserModule {}
