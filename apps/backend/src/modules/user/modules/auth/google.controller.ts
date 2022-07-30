import {
	BadRequestException,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Logger,
	Redirect,
	UseFilters,
	UseGuards,
} from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { Public } from '@/decorators/public.decorator';
import { ExternalAuthUser } from '@/decorators/external-auth-user.decorator';
import type { IEnvironment } from '@/config/env.interface';

import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { GetGoogleUserContract } from './queries/contracts/get-google-user.contract';
import { AddRefreshTokenContract } from './commands/contracts/add-refresh-token.contract';
import { RemoveOldRefreshTokensContract } from './commands/contracts/remove-old-refresh-tokens.contract';
import { CreateGoogleUserContract } from './queries/contracts/create-google-user.contract';
import { UpdateExternalTokenContract } from './commands/contracts/update-external-token.contract';
import Routes from './auth.routes';
import { IExternalAuthUser } from './interfaces/external-auth-user';
import type { IExternalLoggedUser } from './interfaces/user';
import { LoginMixpanelContract } from './events/contracts/login-mixpanel.contract';
import { JwtTokenType } from './models/jwt-token';
import { ExternalAuthFilter } from './filters/external-auth.filter';

@ApiTags('Auth')
@Controller(Routes.CONTROLLER)
export class GoogleController {
	private readonly logger = new Logger(GoogleController.name);

	constructor(
		private readonly queryBus: QueryBus,
		private readonly commandBus: CommandBus,
		private readonly eventBus: EventBus,
		private readonly authService: AuthService,
		private readonly configService: ConfigService<IEnvironment, true>,
	) {}

	@ApiOperation({ description: 'A redirect URL to enter Google OAuth app' })
	@Public()
	@UseGuards(GoogleAuthGuard)
	@Get(Routes.GOOGLE_AUTH)
	public googleAuth() {
		return;
	}

	@ApiOperation({
		description: 'A redirect URL used by Google to send back the server the user data',
	})
	@Public()
	@UseGuards(GoogleAuthGuard)
	@UseFilters(ExternalAuthFilter)
	@Get(Routes.GOOGLE_REDIRECT)
	@HttpCode(HttpStatus.OK)
	@Redirect(undefined, 301)
	public async googleRedirect(@ExternalAuthUser() user: IExternalAuthUser, @RealIP() ip: string) {
		this.logger.log(
			`User with an email "${user.email}" tries to auth. Will check if already exists in DB`,
		);

		const googleUser = await this.queryBus.execute<GetGoogleUserContract, IExternalLoggedUser>(
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
					ip,
					name: user.name,
					email: user.email,
					refreshToken: user.externalToken,
				}),
			);

			this.logger.log(`Successfully created a user with Id: "${createdGoogleUserId}"`);

			const refreshToken = await this.authService.generateJwtToken(
				createdGoogleUserId,
				user.email,
				JwtTokenType.Refresh,
			);

			this.logger.log('Successfully generated refresh token');

			await this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(createdGoogleUserId, refreshToken),
			);

			this.logger.log("Successfully stored the user's refresh token");

			let redirectUrl = `${this.configService.get(
				'frontendUrl',
			)}/external-auth-redirect?refreshToken=${encodeURIComponent(refreshToken)}`;

			if (user.port) {
				redirectUrl += `&port=${user.port}`;
			}

			return {
				url: redirectUrl,
			};
		}

		if (googleUser.authType !== 'GOOGLE') {
			this.logger.log(
				`Tried to auth using Google authentication, but the user with email "${user.email}" exists with other authenticating type`,
			);

			throw new BadRequestException();
		}

		let storeRefreshTokenPromise;

		if (user.externalToken) {
			storeRefreshTokenPromise = this.commandBus.execute<UpdateExternalTokenContract, void>(
				new UpdateExternalTokenContract(googleUser.id, user.externalToken),
			);
		}

		const refreshToken = await this.authService.generateJwtToken(
			googleUser.id,
			user.email,
			JwtTokenType.Refresh,
		);

		this.logger.log('Successfully generated refresh token');

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

		this.eventBus.publish(new LoginMixpanelContract(googleUser.id, ip));

		let redirectUrl = `${this.configService.get(
			'frontendUrl',
		)}/external-auth-redirect?refreshToken=${encodeURIComponent(refreshToken)}`;

		if (user.port) {
			redirectUrl += `&port=${user.port}`;
		}

		return {
			url: redirectUrl,
		};
	}
}
