import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { LoginContract } from '../queries/contracts/login.contract';
import { AuthService } from '../auth.service';
import { ILocalStrategyUser } from '../interfaces/user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {
		super({ usernameField: 'email' });
	}

	async validate(email: string, password: string) {
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

		return { ...loggedUser, passwordHash: undefined };
	}
}
