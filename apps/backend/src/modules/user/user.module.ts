import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { GroupsModule } from './modules/groups/groups.module';
import { InlinePoliciesModule } from './modules/inline-policies/inline-policies.module';
import { RuleModule } from './modules/rules/rules.module';
import { SecretsModule } from './modules/secrets/secrets.module';

@Module({
	imports: [AuthModule, SecretsModule, GroupsModule, InlinePoliciesModule, RuleModule],
})
export class UserModule {}
