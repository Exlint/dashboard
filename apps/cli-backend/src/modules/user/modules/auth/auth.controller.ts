import { BadRequestException, Controller, Get, Logger, Query, Redirect, UseGuards } from '@nestjs/common';

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
	@Redirect(undefined, 301)
	public async auth(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
		@Query('port') port?: string,
	) {
		if (!port) {
			throw new BadRequestException();
		}

		this.logger.log(`Will try to generate a CLI token for user with Id: "${userId}"`);

		const cliToken = await this.authService.generateJwtCliToken(userId, userEmail);

		this.logger.log(`Successfully generated a CLI token for user with Id: "${userId}"`);

		return { url: `http://localhost:${port}/${cliToken}` };
	}
}
