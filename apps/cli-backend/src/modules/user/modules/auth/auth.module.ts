import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CqrsModule } from '@nestjs/cqrs';

import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { VerifyTokenController } from './verify-token.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { GithubAuthGuard } from './guards/github-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { EventHandlers } from './events/handlers';
import { AuthService } from './auth.service';

@Module({
	imports: [CqrsModule, PassportModule, JwtModule.register({})],
	controllers: [VerifyTokenController],
	providers: [
		...EventHandlers,
		RefreshTokenGuard,
		RefreshTokenStrategy,
		LocalStrategy,
		GithubStrategy,
		GoogleStrategy,
		LocalAuthGuard,
		GithubAuthGuard,
		GoogleAuthGuard,
		AuthService,
	],
})
export class AuthModule {}
