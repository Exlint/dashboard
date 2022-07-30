import {
	BadRequestException,
	Controller,
	Get,
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
import { AddRefreshTokenContract } from './commands/contracts/add-refresh-token.contract';
import { RemoveOldRefreshTokensContract } from './commands/contracts/remove-old-refresh-tokens.contract';
import { GithubAuthGuard } from './guards/github-auth.guard';
import { GetGithubUserContract } from './queries/contracts/get-github-user.contract';
import { CreateGithubUserContract } from './queries/contracts/create-github-user.contract';
import { UpdateExternalTokenContract } from './commands/contracts/update-external-token.contract';
import Routes from './auth.routes';
import { IExternalAuthUser } from './interfaces/external-auth-user';
import type { IExternalLoggedUser } from './interfaces/user';
import { LoginMixpanelContract } from './events/contracts/login-mixpanel.contract';
import { JwtTokenType } from './models/jwt-token';
import { ExternalAuthFilter } from './filters/external-auth.filter';

@ApiTags('Auth')
@Controller(Routes.CONTROLLER)
export class GithubController {
	private readonly logger = new Logger(GithubController.name);

	constructor(
		private readonly queryBus: QueryBus,
		private readonly commandBus: CommandBus,
		private readonly eventBus: EventBus,
		private readonly authService: AuthService,
		private readonly configService: ConfigService<IEnvironment, true>,
	) {}

	@ApiOperation({ description: 'A redirect URL to enter GitHub OAuth app' })
	@Public()
	@UseGuards(GithubAuthGuard)
	@Get(Routes.GITHUB_AUTH)
	public githubAuth() {
		return;
	}

	@ApiOperation({
		description: 'A redirect URL used by GitHub to send back the server the user data',
	})
	@Public()
	@UseGuards(GithubAuthGuard)
	@UseFilters(ExternalAuthFilter)
	@Get(Routes.GITHUB_REDIRECT)
	@Redirect(undefined, 301)
	public async githubRedirect(@ExternalAuthUser() user: IExternalAuthUser, @RealIP() ip: string) {
		this.logger.log(
			`User with an email "${user.email}" tries to auth. Will check if already exists in DB`,
		);

		const githubUser = await this.queryBus.execute<GetGithubUserContract, IExternalLoggedUser>(
			new GetGithubUserContract(user.email),
		);

		if (!githubUser) {
			this.logger.log(`Could not find a user with an email: "${user.email}". Will create new one`);

			if (!user.externalToken) {
				this.logger.error(
					`Could not get a refresh token for GitHub user with an email: "${user.email}"`,
				);

				throw new BadRequestException();
			}

			const createdGithubUserId = await this.queryBus.execute<CreateGithubUserContract, string>(
				new CreateGithubUserContract({
					ip,
					name: user.name,
					email: user.email,
					accessToken: user.externalToken,
				}),
			);

			this.logger.log(`Successfully created a user with Id: "${createdGithubUserId}"`);

			const refreshToken = await this.authService.generateJwtToken(
				createdGithubUserId,
				user.email,
				JwtTokenType.Refresh,
			);

			this.logger.log('Successfully generated both refresh token');

			await this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(createdGithubUserId, refreshToken),
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

		if (githubUser.authType !== 'GITHUB') {
			this.logger.log(
				`Tried to auth using Github authentication, but the user with email "${user.email}" exists with other authenticating type`,
			);

			throw new BadRequestException();
		}

		let storeAccessTokenPromise;

		if (user.externalToken) {
			storeAccessTokenPromise = this.commandBus.execute<UpdateExternalTokenContract, void>(
				new UpdateExternalTokenContract(githubUser.id, user.externalToken),
			);
		}

		const refreshToken = await this.authService.generateJwtToken(
			githubUser.id,
			user.email,
			JwtTokenType.Refresh,
		);

		this.logger.log('Successfully generated refresh token');

		await Promise.all([
			storeAccessTokenPromise,
			this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(githubUser.id, refreshToken),
			),
			this.commandBus.execute<RemoveOldRefreshTokensContract, void>(
				new RemoveOldRefreshTokensContract(githubUser.id),
			),
		]);

		this.logger.log('Successfully stored new refresh token and remove old ones');

		this.eventBus.publish(new LoginMixpanelContract(githubUser.id, ip));

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
