import { Controller, Get, HttpCode, HttpStatus, Logger, UseGuards } from '@nestjs/common';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Public } from '@/decorators/public.decorator';
import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AuthService } from './auth.service';
import { JwtTokenType } from './models/jwt-token';
import { RefreshTokenResponse } from './classes/responses';
import Routes from './auth.routes';

@ApiTags('Auth')
@Controller(Routes.CONTROLLER)
export class RefreshTokenController {
	private readonly logger = new Logger(RefreshTokenController.name);

	constructor(private readonly authService: AuthService) {}

	@ApiBearerAuth('refresh-token')
	@ApiOperation({ description: 'Get a new access token by providing a refresh token' })
	@ApiOkResponse({
		description: 'If successfully refreshed a new access token',
		type: RefreshTokenResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If refresh token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to refresh a new access token' })
	@Public()
	@UseGuards(RefreshTokenGuard)
	@Get(Routes.REFRESH_TOKEN)
	@HttpCode(HttpStatus.OK)
	public async refreshToken(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
	): Promise<RefreshTokenResponse> {
		this.logger.log(`Will try to generate access token for a user with an Id: "${userId}"`);

		const accessToken = await this.authService.generateJwtToken(userId, userEmail, JwtTokenType.Access);

		this.logger.log(`Successfully generated access token for user with an Id: "${userId}"`);

		return { accessToken };
	}
}
