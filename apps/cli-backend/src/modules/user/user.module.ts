import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { GroupsModule } from './modules/groups/groups.module';

@Module({
	imports: [AuthModule, GroupsModule],
})
export class UserModule {}
