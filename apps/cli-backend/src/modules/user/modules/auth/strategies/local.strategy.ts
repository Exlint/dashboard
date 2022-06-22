import url from 'url';

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { LoginContract } from '../queries/contracts/login.contract';
import { AuthService } from '../auth.service';
import { ILocalStrategyUser } from '../interfaces/user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {
		super({
			usernameField: 'email',
			passReqToCallback: true,
		});
	}

	async validate(request: Request, email: string, password: string) {
		const queryObject = url.parse(request.url, true).query;
		const port = queryObject['port'];

		if (!port || typeof port !== 'string') {
			throw new BadRequestException();
		}

		const loggedUser = await this.queryBus.execute<LoginContract, ILocalStrategyUser | null>(
			new LoginContract(email),
		);

		if (!loggedUser) {
			throw new UnauthorizedException();
		}

		const passwordsComparison = await this.authService.comparePassword(
			password,
			loggedUser.passwordHash!,
		);

		if (!passwordsComparison) {
			throw new UnauthorizedException();
		}

		return { ...loggedUser, port, passwordHash: undefined };
	}
}
