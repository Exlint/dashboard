import { Global, Module } from '@nestjs/common';

import { DBGroupService } from './group.service';
import { PrismaService } from './prisma.service';

@Global()
@Module({
	providers: [PrismaService, DBGroupService],
	exports: [DBGroupService],
})
export class DatabaseModule {}
