import { Global, Module } from '@nestjs/common';

import { DBComplianceService } from './compliance.service';
import { PrismaService } from './prisma.service';
import { DBUserService } from './user.service';

@Global()
@Module({
	providers: [PrismaService, DBComplianceService, DBUserService],
	exports: [DBComplianceService, DBUserService],
})
export class DatabaseModule {}
