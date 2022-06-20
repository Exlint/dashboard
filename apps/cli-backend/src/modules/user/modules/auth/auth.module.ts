import { Module } from '@nestjs/common';

import { VerifyTokenController } from './verify-token.controller';

@Module({
	controllers: [VerifyTokenController],
})
export class AuthModule {}
