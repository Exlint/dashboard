import {
	BadRequestException,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Logger,
	UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User } from '@prisma/client';

import { Public } from '@/decorators/public.decorator';
import { ExternalAuthUser } from '@/decorators/external-auth-user.decorator';
import { IExternalAuthUser } from '@/interfaces/external-auth-user';

import { AuthService } from './auth.service';
import { IGoogleRedirectResponse } from './interfaces/responses';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { GetGoogleUserContract } from './queries/contracts/get-google-user.contract';
import { AddRefreshTokenContract } from './commands/contracts/add-refresh-token.contract';
import { RemoveOldRefreshTokensContract } from './commands/contracts/remove-old-refresh-tokens.contract';
import { CreateGoogleUserContract } from './queries/contracts/create-google-user.contract';
import { UpdateGoogleRefreshTokenContract } from './commands/contracts/update-google-refresh-token.contract';

@Controller('auth')
export class GoogleController {
	private readonly logger = new Logger(GoogleController.name);

	constructor(
		private readonly queryBus: QueryBus,
		private readonly commandBus: CommandBus,
		private readonly authService: AuthService,
	) {}

	@Public()
	@UseGuards(GoogleAuthGuard)
	@Get('google-auth')
	public googleAuth() {
		return;
	}

	@Public()
	@UseGuards(GoogleAuthGuard)
	@Get('google-redirect')
	@HttpCode(HttpStatus.OK)
	public async googleRedirect(
		@ExternalAuthUser() user: IExternalAuthUser,
	): Promise<IGoogleRedirectResponse> {
		this.logger.log(
			`User with an email "${user.email}" tries to login. Will check if already exists in DB`,
		);

		const googleUser = await this.queryBus.execute<GetGoogleUserContract, Pick<User, 'id' | 'authType'>>(
			new GetGoogleUserContract(user.email),
		);

		if (!googleUser) {
			this.logger.log(`Could not find a user with an email: "${user.email}". Will create new one`);

			if (!user.externalToken) {
				this.logger.error(
					`Could not get a refresh token for Google user with an email: "${user.email}"`,
				);

				throw new BadRequestException();
			}

			const createdGoogleUserId = await this.queryBus.execute<CreateGoogleUserContract, string>(
				new CreateGoogleUserContract({
					name: user.name,
					email: user.email,
					refreshToken: user.externalToken,
				}),
			);

			this.logger.log(`Successfully created a user with Id: "${createdGoogleUserId}"`);

			const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
				createdGoogleUserId,
				user.email,
			);

			this.logger.log('Successfully generated both access and refresh tokens');

			await this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(createdGoogleUserId, refreshToken),
			);

			this.logger.log("Successfully stored the user's refresh token");

			return {
				accessToken,
				refreshToken,
				name: user.name,
			};
		}

		if (googleUser.authType !== 'GOOGLE') {
			this.logger.log(
				`Tried to log in using Google authentication, but the user with email "${user.email}" exists with other authenticating type`,
			);

			throw new BadRequestException();
		}

		let storeRefreshTokenPromise = Promise.resolve();

		if (user.externalToken) {
			storeRefreshTokenPromise = this.commandBus.execute<UpdateGoogleRefreshTokenContract, void>(
				new UpdateGoogleRefreshTokenContract(googleUser.id, user.externalToken),
			);
		}

		const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
			googleUser.id,
			user.email,
		);

		this.logger.log('Successfully generated both access and refresh tokens');

		await Promise.all([
			storeRefreshTokenPromise,
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
