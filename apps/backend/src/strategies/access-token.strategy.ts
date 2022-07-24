import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { IEnvironment } from '../config/env.interface';
import type { IJwtTokenPayload } from '../interfaces/jwt-token';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'access-token') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get('accessTokenJwtKey', { infer: true }),
		});
	}

	validate(payload: IJwtTokenPayload) {
		return payload;
	}
}
