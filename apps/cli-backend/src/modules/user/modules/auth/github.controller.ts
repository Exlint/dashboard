import { Controller, Get, Logger, Redirect, UnauthorizedException, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { Public } from '@/decorators/public.decorator';
import { ExternalAuthUser } from '@/decorators/external-auth-user.decorator';

import { AuthService } from './auth.service';
import { GithubAuthGuard } from './guards/github-auth.guard';
import { GetGithubUserContract } from './queries/contracts/get-github-user.contract';
import Routes from './auth.routes';
import { IExternalAuthUser } from './interfaces/external-auth-user';
import { IExternalLoggedUser } from './interfaces/user';

@Controller(Routes.CONTROLLER)
export class GithubController {
	private readonly logger = new Logger(GithubController.name);

	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {}

	@Public()
	@UseGuards(GithubAuthGuard)
	@Get(Routes.GITHUB_AUTH)
	public githubAuth() {
		return;
	}

	@Public()
	@UseGuards(GithubAuthGuard)
	@Get(Routes.GITHUB_REDIRECT)
	@Redirect(undefined, 301)
	public async githubRedirect(@ExternalAuthUser() user: IExternalAuthUser) {
		this.logger.log(
			`User with an email "${user.email}" tries to login. Will check if already exists in DB`,
		);

		const githubUser = await this.queryBus.execute<GetGithubUserContract, IExternalLoggedUser>(
			new GetGithubUserContract(user.email),
		);

		if (!githubUser) {
			this.logger.log(
				`Tried to log in using Github authentication, but the user with email "${user.email}" does not exist`,
			);

			throw new UnauthorizedException();
		}

		if (githubUser.authType !== 'GITHUB') {
			this.logger.log(
				`Tried to log in using Github authentication, but the user with email "${user.email}" exists with other authenticating type`,
			);

			throw new UnauthorizedException();
		}

		const cliToken = await this.authService.generateJwtCliToken(githubUser.id, user.email);

		this.logger.log('Successfully generated cli token');

		return { url: `http://localhost:${user.port}/${cliToken}` };
	}
}
