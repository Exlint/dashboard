import { Controller, HttpCode, HttpStatus, Logger, Post, UseGuards } from '@nestjs/common';

import { Public } from '@/decorators/public.decorator';
import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AuthService } from './auth.service';
import { JwtTokenType } from './models/jwt-token';
import type { IRefreshTokenResponse } from './interfaces/responses';
import Routes from './auth.routes';

@Controller(Routes.CONTROLLER)
export class RefreshTokenController {
	private readonly logger = new Logger(RefreshTokenController.name);

	constructor(private readonly authService: AuthService) {}

	@Public()
	@UseGuards(RefreshTokenGuard)
	@Post(Routes.REFRESH_TOKEN)
	@HttpCode(HttpStatus.OK)
	public async refreshToken(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
	): Promise<IRefreshTokenResponse> {
		this.logger.log(`Will try to generate access token for a user with an Id: "${userId}"`);

		const accessToken = await this.authService.generateJwtToken(userId, userEmail, JwtTokenType.Access);

		this.logger.log(`Successfully generated access token for user with an Id: "${userId}"`);

		return { accessToken };
	}
}
