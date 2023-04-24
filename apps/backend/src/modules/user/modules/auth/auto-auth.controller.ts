import {
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Logger,
	UnauthorizedException,
	UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Public } from '@/decorators/public.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { AuthService } from './auth.service';
import { AutoAuthResponse } from './classes/responses';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { JwtTokenType } from './models/jwt-token';
import Routes from './auth.routes';
import { AutoAuthContract } from './queries/contracts/auto-auth.contract';
import type { IAutoAuthLoggedUser } from './interfaces/user';

@ApiTags('Auth')
@Controller(Routes.CONTROLLER)
export class AutoAuthController {
	private readonly logger = new Logger(AutoAuthController.name);

	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {}

	@ApiBearerAuth('refresh-token')
	@ApiOperation({ description: 'Auto authentication if providing refresh token' })
	@ApiOkResponse({
		description: 'If successfully fulfill the auto auth request',
		type: AutoAuthResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If could not find a logged user, or refresh token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to retrieve logged user' })
	@Public()
	@UseGuards(RefreshTokenGuard)
	@Get(Routes.AUTO_AUTH)
	@HttpCode(HttpStatus.OK)
	public async autoAuth(@CurrentUserEmail() userEmail: string): Promise<AutoAuthResponse> {
		this.logger.log(`Will try to auto auth with data email: "${userEmail}"`);

		const loggedUser = await this.queryBus.execute<AutoAuthContract, IAutoAuthLoggedUser | null>(
			new AutoAuthContract(userEmail),
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
			createdAt: loggedUser.createdAt.getTime(),
		};
	}
}
