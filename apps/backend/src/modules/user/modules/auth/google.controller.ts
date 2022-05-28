import {
	BadRequestException,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Logger,
	Post,
	UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User } from '@prisma/client';

import { Public } from '@/decorators/public.decorator';
import { GoogleUser } from '@/decorators/google-user.decorator';

import { AuthService } from './auth.service';
import { IGoogleRedirectResponse } from './interfaces/responses';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { IGoogleUser } from './interfaces/google';
import { GetGoogleUserContract } from './queries/contracts/get-google-user.contract';
import { CreateUserContract } from './queries/contracts/create-user.contract';
import { AddRefreshTokenContract } from './commands/contracts/add-refresh-token.contract';
import { RemoveOldRefreshTokensContract } from './commands/contracts/remove-old-refresh-tokens.contract';

@Controller('auth')
export class GoogleController {
	private readonly logger = new Logger(GoogleController.name);

	constructor(
		private readonly queryBus: QueryBus,
		private readonly commandBus: CommandBus,
		private readonly authService: AuthService,
	) {}

	@Public()
	@Get()
	@UseGuards(GoogleAuthGuard)
	public googleAuth() {
		return;
	}

	@Public()
	@UseGuards(GoogleAuthGuard)
	@Post('redirect')
	@HttpCode(HttpStatus.OK)
	public async googleRedirect(@GoogleUser() user: IGoogleUser): Promise<IGoogleRedirectResponse> {
		this.logger.log(
			`User with an email "${user.email}" tries to login. Will check if already exists in DB`,
		);

		const googleUser = await this.queryBus.execute<GetGoogleUserContract, Pick<User, 'id' | 'authType'>>(
			new GetGoogleUserContract(user.email),
		);

		if (!googleUser) {
			this.logger.log(`Could not find a user with an email: "${user.email}". Will create new one`);

			const createdUserId = await this.queryBus.execute<CreateUserContract, string>(
				new CreateUserContract({ name: user.name, email: user.email, authType: 'local' }),
			);

			this.logger.log(`Successfully created a user with Id: "${createdUserId}"`);

			const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
				createdUserId,
				user.email,
			);

			this.logger.log('Successfully generated both access and refresh tokens');

			await this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(createdUserId, refreshToken),
			);

			this.logger.log("Successfully stored the user's refresh token");

			return {
				accessToken,
				refreshToken,
				name: user.name,
			};
		}

		if (googleUser.authType !== 'google') {
			this.logger.log(
				`Tried to log in using Google authentication, but the user with email "${user.email}" exists with other autenticationg type`,
			);

			throw new BadRequestException();
		}

		const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
			googleUser.id,
			user.email,
		);

		this.logger.log('Successfully generated both access and refresh tokens');

		await Promise.all([
			this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(googleUser.id, refreshToken),
			),
			this.commandBus.execute<RemoveOldRefreshTokensContract, void>(
				new RemoveOldRefreshTokensContract(googleUser.id),
			),
		]);

		this.logger.log('Successfully stored new refresh token and remove old ones');

		return {
			accessToken,
			refreshToken,
			name: user.name,
		};
	}
}
