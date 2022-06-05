import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { GroupsModule } from './modules/groups/groups.module';
import { SecretsModule } from './modules/secrets/secrets.module';

@Module({
	imports: [AuthModule, SecretsModule, GroupsModule],
})
export class UserModule {}
