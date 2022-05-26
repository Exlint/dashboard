import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { User as DBUser } from '@prisma/client';

import { LoginContract } from '../queries/contracts/login.contract';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {
		super({ usernameField: 'email' });
	}

	async validate(email: string, password: string) {
		const loggedUser = await this.queryBus.execute<
			LoginContract,
			Pick<DBUser, 'passwordHash' | 'id' | 'name'> | null
		>(new LoginContract(email));

		if (!loggedUser) {
			throw new UnauthorizedException();
		}

		const passwordsComparison = await this.authService.comparePassword(password, loggedUser.passwordHash);

		if (!passwordsComparison) {
			throw new UnauthorizedException();
		}

		return {
			id: loggedUser.id,
			name: loggedUser.name,
		};
	}
}
