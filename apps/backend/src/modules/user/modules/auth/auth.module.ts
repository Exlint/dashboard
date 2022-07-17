import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { RefreshTokenController } from './refresh-token.controller';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { GoogleStrategy } from './strategies/google.strategy';
import { GoogleController } from './google.controller';
import { GithubAuthGuard } from './guards/github-auth.guard';
import { GithubStrategy } from './strategies/github.strategy';
import { GithubController } from './github.controller';
import { DeleteController } from './delete.controller';
import { EventHandlers } from './events/handlers';
import { AutoAuthController } from './auto-auth.controller';

@Module({
	imports: [CqrsModule, PassportModule, JwtModule.register({})],
	controllers: [
		RefreshTokenController,
		GoogleController,
		GithubController,
		DeleteController,
		AutoAuthController,
	],
	providers: [
		...QueryHandlers,
		...CommandHandlers,
		...EventHandlers,
		AuthService,
		RefreshTokenStrategy,
		GoogleStrategy,
		GithubStrategy,
		RefreshTokenGuard,
		GoogleAuthGuard,
		GithubAuthGuard,
	],
})
export class AuthModule {}
