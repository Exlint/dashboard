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

import { Public } from '@/decorators/public.decorator';
import { ExternalAuthUser } from '@/decorators/external-auth-user.decorator';

import { AuthService } from './auth.service';
import { AddRefreshTokenContract } from './commands/contracts/add-refresh-token.contract';
import { RemoveOldRefreshTokensContract } from './commands/contracts/remove-old-refresh-tokens.contract';
import { GithubAuthGuard } from './guards/github-auth.guard';
import { IGithubRedirectResponse } from './interfaces/responses';
import { GetGithubUserContract } from './queries/contracts/get-github-user.contract';
import { CreateGithubUserContract } from './queries/contracts/create-github-user.contract';
import { UpdateExternalTokenContract } from './commands/contracts/update-external-token.contract';
import Routes from './auth.routes';
import { IExternalAuthUser } from './interfaces/external-auth-user';
import { IExternalLoggedUser } from './interfaces/user';

@Controller(Routes.CONTROLLER)
export class GithubController {
	private readonly logger = new Logger(GithubController.name);

	constructor(
		private readonly queryBus: QueryBus,
		private readonly commandBus: CommandBus,
		private readonly authService: AuthService,
	) {}

	@Public()
	@UseGuards(GithubAuthGuard)
	@Get(Routes.GITHUB_AUTH)
	public githubAuth() {
		return;
	}

	@Public()
	@UseGuards(GithubAuthGuard)
	@Get(Routes.GITHUB_REDIRECT)
	@HttpCode(HttpStatus.OK)
	public async githubRedirect(
		@ExternalAuthUser() user: IExternalAuthUser,
	): Promise<IGithubRedirectResponse> {
		this.logger.log(
			`User with an email "${user.email}" tries to login. Will check if already exists in DB`,
		);

		const githubUser = await this.queryBus.execute<GetGithubUserContract, IExternalLoggedUser>(
			new GetGithubUserContract(user.email),
		);

		if (!githubUser) {
			this.logger.log(`Could not find a user with an email: "${user.email}". Will create new one`);

			const createdGithubUserId = await this.queryBus.execute<CreateGithubUserContract, string>(
				new CreateGithubUserContract({
					name: user.name,
					email: user.email,
					accessToken: user.externalToken!,
				}),
			);

			this.logger.log(`Successfully created a user with Id: "${createdGithubUserId}"`);

			const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
				createdGithubUserId,
				user.email,
			);

			this.logger.log('Successfully generated both access and refresh tokens');

			await this.commandBus.execute<AddRefreshTokenContract, void>(
				new AddRefreshTokenContract(createdGithubUserId, refreshToken),
			);

			this.logger.log("Successfully stored the user's refresh token");

			return {
				accessToken,
				refreshToken,
				name: user.name,
				id: createdGithubUserId,
				clientSecrets: [],
				groupsData: [],
			};
		}

		if (githubUser.authType !== 'GITHUB') {
			this.logger.log(
				`Tried to log in using Github authentication, but the user with email "${user.email}" exists with other authenticating type`,
			);

			throw new BadRequestException();
		}

		let storeAccessTokenPromise;

		if (user.externalToken) {
			storeAccessTokenPromise = this.commandBus.execute<UpdateExternalTokenContract, void>(
				new UpdateExternalTokenContract(githubUser.id, user.externalToken),
			);
		}

		const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
			githubUser.id,
			user.email,
		);

		this.logger.log('Successfully generated both access and refresh tokens');

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

		return {
			accessToken,
			refreshToken,
			name: user.name,
			id: githubUser.id,
			clientSecrets: githubUser.clientSecrets,
			groupsData: githubUser.groupsData,
		};
	}
}
