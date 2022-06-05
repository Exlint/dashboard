import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Logger,
	Post,
	UnauthorizedException,
	UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { Public } from '@/decorators/public.decorator';
import { CurrentUser } from '@/decorators/current-user.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { AuthService } from './auth.service';
import { LoginDto } from './classes/login.dto';
import { IAutoLoginResponse, ILoginResponse } from './interfaces/responses';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AddRefreshTokenContract } from './commands/contracts/add-refresh-token.contract';
import { RemoveOldRefreshTokensContract } from './commands/contracts/remove-old-refresh-tokens.contract';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { LoginContract } from './queries/contracts/login.contract';
import { JwtTokenType } from './models/jwt-token';
import Routes from './auth.routes';
import { ILoggedUser } from './interfaces/user';
import { AutoLoginContract } from './queries/contracts/auto-login.contract';

@Controller(Routes.CONTROLLER)
export class LoginController {
	private readonly logger = new Logger(LoginController.name);

	constructor(
		private readonly commandBus: CommandBus,
		private readonly queryBus: QueryBus,
		private readonly authService: AuthService,
	) {}

	@Public()
	@UseGuards(LocalAuthGuard)
	@Post(Routes.LOGIN)
	@HttpCode(HttpStatus.OK)
	public async login(
		@Body() loginDto: LoginDto,
		@CurrentUser() user: ILoggedUser,
	): Promise<ILoginResponse> {
		this.logger.log(`Will try to login with data email: "${loginDto.email}"`);

		const [accessToken, refreshToken] = await this.authService.generateJwtTokens(user.id, loginDto.email);

		this.logger.log('Successfully generated both access and refresh tokens');

		await Promise.all([
			this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(user.id, refreshToken),
			),
			this.commandBus.execute<RemoveOldRefreshTokensContract, void>(
				new RemoveOldRefreshTokensContract(user.id),
			),
		]);

		this.logger.log('Successfully stored new refresh token and remove old ones');

		return {
			accessToken,
			refreshToken,
			...user,
		};
	}

	@Public()
	@UseGuards(RefreshTokenGuard)
	@Post(Routes.AUTO_LOGIN)
	@HttpCode(HttpStatus.OK)
	public async autoLogin(@CurrentUserEmail() userEmail: string): Promise<IAutoLoginResponse> {
		this.logger.log(`Will try to auto login with data email: "${userEmail}"`);

		const loggedUser = await this.queryBus.execute<AutoLoginContract, ILoggedUser | null>(
			new LoginContract(userEmail),
		);

		if (!loggedUser) {
			this.logger.log(`Could not find a user with an email: "${userEmail}"`);

			throw new UnauthorizedException();
		}

		this.logger.log(`Will try to generate an access token for a user with an email: "${userEmail}"`);

		const accessToken = await this.authService.generateJwtToken(
			loggedUser.id,
			userEmail,
			JwtTokenType.Access,
		);

		return {
			accessToken,
			...loggedUser,
		};
	}
}
