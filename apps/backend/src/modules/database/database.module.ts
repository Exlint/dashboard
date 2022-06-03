import { Global, Module } from '@nestjs/common';
import { DBClientSecretService } from './client-secret.service';

import { PrismaService } from './prisma.service';
import { DBUserService } from './user.service';

@Global()
@Module({
	providers: [PrismaService, DBUserService, DBClientSecretService],
	exports: [DBUserService, DBClientSecretService],
})
export class DatabaseModule {}
