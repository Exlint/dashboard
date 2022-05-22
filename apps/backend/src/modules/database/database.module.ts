import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { DBUserService } from './user.service';

@Global()
@Module({
	providers: [PrismaService, DBUserService],
	exports: [DBUserService],
})
export class DatabaseModule {}
