import { Global, Module } from '@nestjs/common';

import { DBClientSecretService } from './client-secret.service';
import { DBGroupService } from './group.service';
import { DBInlinePolicyService } from './inline-policy.service';
import { PrismaService } from './prisma.service';
import { DBUserService } from './user.service';

@Global()
@Module({
	providers: [PrismaService, DBUserService, DBClientSecretService, DBGroupService, DBInlinePolicyService],
	exports: [DBUserService, DBClientSecretService, DBGroupService, DBInlinePolicyService],
})
export class DatabaseModule {}
