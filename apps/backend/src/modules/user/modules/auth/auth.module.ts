import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { QueryHandlers } from './queries/handlers';

@Module({
	imports: [CqrsModule, PassportModule],
	controllers: [AuthController],
	providers: [...QueryHandlers, AuthService, LocalStrategy],
})
export class AuthModule {}
