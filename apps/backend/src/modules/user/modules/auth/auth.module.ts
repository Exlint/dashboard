import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { LoginController } from './login.controller';
import { RegisterController } from './register.controller';
import { RefreshTokenController } from './refresh-token.controller';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { GoogleStrategy } from './strategies/google.strategy';
import { GoogleController } from './google.controller';
import { GithubAuthGuard } from './guards/github-auth.guard';
import { GithubStrategy } from './strategies/github.strategy';
import { GithubController } from './github.controller';
import { DeleteController } from './delete.controller';

@Module({
	imports: [CqrsModule, PassportModule, JwtModule.register({})],
	controllers: [
		LoginController,
		RegisterController,
		RefreshTokenController,
		GoogleController,
		GithubController,
		DeleteController,
	],
	providers: [
		...QueryHandlers,
		...CommandHandlers,
		AuthService,
		LocalStrategy,
		RefreshTokenStrategy,
		GoogleStrategy,
		GithubStrategy,
		RefreshTokenGuard,
		GoogleAuthGuard,
		GithubAuthGuard,
	],
})
export class AuthModule {}
