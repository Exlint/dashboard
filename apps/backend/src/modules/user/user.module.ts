import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { SecretsModule } from './modules/secrets/secrets.module';

@Module({
	imports: [AuthModule, SecretsModule],
})
export class UserModule {}
