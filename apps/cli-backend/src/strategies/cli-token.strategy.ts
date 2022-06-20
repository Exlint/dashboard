import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { IEnvironment } from '../config/env.interface';
import { IJwtTokenPayload } from '../interfaces/jwt-token';

@Injectable()
export class CliTokenStrategy extends PassportStrategy(Strategy, 'cli-token') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get('cliTokenJwtKey', { infer: true }),
		});
	}

	validate(payload: IJwtTokenPayload) {
		return payload;
	}
}
