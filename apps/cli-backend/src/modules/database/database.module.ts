import { Global, Module } from '@nestjs/common';

import { DBGroupService } from './group.service';
import { PrismaService } from './prisma.service';
import { DBUserService } from './user.service';

@Global()
@Module({
	providers: [PrismaService, DBGroupService, DBUserService],
	exports: [DBGroupService, DBUserService],
})
export class DatabaseModule {}
