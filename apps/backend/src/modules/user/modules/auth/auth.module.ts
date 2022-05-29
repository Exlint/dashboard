import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import EnvConfiguration from '@/config/configuration';
import { validate } from '@/config/env.validation';

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

@Module({
	imports: [
		CqrsModule,
		PassportModule,
		ConfigModule.forRoot({
			load: [EnvConfiguration],
			isGlobal: true,
			cache: true,
			validate,
			validationOptions: {
				allowUnknown: false,
				abortEarly: true,
			},
		}),
		JwtModule.register({}),
	],
	controllers: [LoginController, RegisterController, RefreshTokenController, GoogleController],
	providers: [
		...QueryHandlers,
		...CommandHandlers,
		AuthService,
		LocalStrategy,
		RefreshTokenStrategy,
		GoogleStrategy,
		RefreshTokenGuard,
		GoogleAuthGuard,
	],
})
export class AuthModule {}
