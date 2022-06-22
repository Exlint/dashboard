import { Body, Controller, Get, Logger, Post, Query, Redirect, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryBus } from '@nestjs/cqrs';

import { Public } from '@/decorators/public.decorator';
import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';
import { CurrentUser } from '@/decorators/current-user.decorator';

import Routes from './auth.routes';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { UserIdExistsContract } from './queries/contracts/user-id-exists.contract';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginDto } from './classes/login.dto';
import { ILocalLoginUser } from './interfaces/user';

@Controller(Routes.CONTROLLER)
export class LoginController {
	private readonly logger = new Logger(LoginController.name);

	constructor(
		private readonly configService: ConfigService,
		private readonly queryBus: QueryBus,
		private readonly authService: AuthService,
	) {}

	@UseGuards(RefreshTokenGuard)
	@Public()
	@Get(Routes.LOGIN)
	@Redirect(undefined, 301)
	public async login(
		@Query('port') port: string,
		@CurrentUserId() userId?: string,
		@CurrentUserEmail() userEmail?: string,
	) {
		if (!userId || !userEmail) {
			return {
				url: `${this.configService.get('frontendUrl', {
					infer: true,
				})}/user/auth/login?cli-port=${port}`,
			};
		}

		const doesUserIdExist = await this.queryBus.execute<UserIdExistsContract, boolean>(
			new UserIdExistsContract(userId),
		);

		if (!doesUserIdExist) {
			return {
				url: `${this.configService.get('frontendUrl', {
					infer: true,
				})}/login?port=${port}`,
			};
		}

		const cliToken = await this.authService.generateJwtCliToken(userId, userEmail);

		return { url: `http://localhost:${port}/${cliToken}` };
	}

	@Public()
	@UseGuards(LocalAuthGuard)
	@Post(Routes.LOCAL_LOGIN)
	@Redirect(undefined, 301)
	public async localLogin(@Body() loginDto: LoginDto, @CurrentUser() user: ILocalLoginUser) {
		this.logger.log(`Will try to login with data email: "${loginDto.email}"`);

		const cliToken = await this.authService.generateJwtCliToken(user.id, loginDto.email);

		this.logger.log('Successfully generated cli token');

		return { url: `http://localhost:${user.port}/${cliToken}` };
	}
}
