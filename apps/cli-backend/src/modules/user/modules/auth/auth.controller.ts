import { Controller, Get, HttpCode, HttpStatus, Logger, UseGuards } from '@nestjs/common';
import type { ICliAuthResponseData } from '@exlint.io/common';

import { Public } from '@/decorators/public.decorator';
import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import Routes from './auth.routes';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AuthService } from './auth.service';

@Controller(Routes.CONTROLLER)
export class AuthController {
	private readonly logger = new Logger(AuthController.name);

	constructor(private readonly authService: AuthService) {}

	@Public()
	@UseGuards(RefreshTokenGuard)
	@Get(Routes.AUTH)
	@HttpCode(HttpStatus.OK)
	public async auth(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
	): Promise<ICliAuthResponseData> {
		this.logger.log(`Will try to generate a CLI token for user with Id: "${userId}"`);

		const cliToken = await this.authService.generateJwtCliToken(userId, userEmail);

		this.logger.log(`Successfully generated a CLI token for user with Id: "${userId}"`);

		return { cliToken, email: userEmail };
	}
}
