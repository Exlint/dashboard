import {
	Controller,
	HttpCode,
	HttpStatus,
	Logger,
	Post,
	UnauthorizedException,
	UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { Public } from '@/decorators/public.decorator';
import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AuthService } from './auth.service';
import { JwtTokenType } from './models/jwt-token';
import { IRefreshTokenResponse } from './interfaces/responses';
import { EmailExistsContract } from './queries/contracts/email-exists.contract';
import Routes from './auth.routes';

@Controller(Routes.CONTROLLER)
export class RefreshTokenController {
	private readonly logger = new Logger(RefreshTokenController.name);

	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {}

	@Public()
	@UseGuards(RefreshTokenGuard)
	@Post(Routes.REFRESH_TOKEN)
	@HttpCode(HttpStatus.OK)
	public async refreshToken(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
	): Promise<IRefreshTokenResponse> {
		this.logger.log(`Will check if user exists with an email: "${userEmail}"`);

		const emailExists = await this.queryBus.execute<EmailExistsContract, boolean>(
			new EmailExistsContract(userEmail),
		);

		if (!emailExists) {
			this.logger.log(`A user with an email: "${userEmail}" does not exist`);

			throw new UnauthorizedException();
		}

		this.logger.log(`Found a user with an email: "${userEmail}"`);

		const accessToken = await this.authService.generateJwtToken(userId, userEmail, JwtTokenType.Access);

		this.logger.log(`Successfully generated access token for user with an Id: "${userId}"`);

		return { accessToken };
	}
}
