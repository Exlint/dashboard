import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { DBUserService } from '../modules/database/user.service';
import type { IEnvironment } from '../config/env.interface';
import type { IJwtTokenPayload } from '../interfaces/jwt-token';

@Injectable()
export class CliTokenStrategy extends PassportStrategy(Strategy, 'cli-token') {
	constructor(
		protected configService: ConfigService<IEnvironment, true>,
		private dbUserService: DBUserService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get('cliTokenJwtKey', { infer: true }),
		});
	}

	public async validate(payload: IJwtTokenPayload) {
		const doesUserIdExist = await this.dbUserService.doesUserIdExist(payload.sub);

		if (!doesUserIdExist) {
			throw new UnauthorizedException();
		}

		return payload;
	}
}
