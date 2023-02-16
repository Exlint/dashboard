import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { CompliancesModule } from './modules/compliances/compliances.module';

@Module({
	imports: [AuthModule, CompliancesModule],
})
export class UserModule {}
