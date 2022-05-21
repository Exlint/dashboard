import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { QueryHandlers } from './queries/handlers';

@Module({
	imports: [CqrsModule],
	controllers: [AuthController],
	providers: [...QueryHandlers, AuthService],
})
export class AuthModule {}
