import { Controller, Get, Logger, Redirect, UnauthorizedException, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { Public } from '@/decorators/public.decorator';
import { ExternalAuthUser } from '@/decorators/external-auth-user.decorator';

import { AuthService } from './auth.service';
import Routes from './auth.routes';
import { IExternalAuthUser } from './interfaces/external-auth-user';
import { IExternalLoggedUser } from './interfaces/user';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { GetGoogleUserContract } from './queries/contracts/get-google-user.contract';

@Controller(Routes.CONTROLLER)
export class GoogleController {
	private readonly logger = new Logger(GoogleController.name);

	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {}

	@Public()
	@UseGuards(GoogleAuthGuard)
	@Get(Routes.GOOGLE_AUTH)
	public googleAuth() {
		return;
	}

	@Public()
	@UseGuards(GoogleAuthGuard)
	@Get(Routes.GOOGLE_REDIRECT)
	@Redirect(undefined, 301)
	public async googleRedirect(@ExternalAuthUser() user: IExternalAuthUser) {
		this.logger.log(
			`User with an email "${user.email}" tries to login. Will check if already exists in DB`,
		);

		const googleUser = await this.queryBus.execute<GetGoogleUserContract, IExternalLoggedUser>(
			new GetGoogleUserContract(user.email),
		);

		if (!googleUser) {
			this.logger.log(
				`Tried to log in using Google authentication, but the user with email "${user.email}" does not exist`,
			);

			throw new UnauthorizedException();
		}

		if (googleUser.authType !== 'GOOGLE') {
			this.logger.log(
				`Tried to log in using Google authentication, but the user with email "${user.email}" exists with other authenticating type`,
			);

			throw new UnauthorizedException();
		}

		const cliToken = await this.authService.generateJwtCliToken(googleUser.id, user.email);

		this.logger.log('Successfully generated cli token');

		return { url: `http://localhost:${user.port}/${cliToken}` };
	}
}
