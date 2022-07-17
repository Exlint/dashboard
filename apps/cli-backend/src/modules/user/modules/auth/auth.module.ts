import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CqrsModule } from '@nestjs/cqrs';

import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { VerifyTokenController } from './verify-token.controller';
import { EventHandlers } from './events/handlers';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
	imports: [CqrsModule, PassportModule, JwtModule.register({})],
	controllers: [VerifyTokenController, AuthController],
	providers: [...EventHandlers, RefreshTokenGuard, RefreshTokenStrategy, AuthService],
})
export class AuthModule {}
