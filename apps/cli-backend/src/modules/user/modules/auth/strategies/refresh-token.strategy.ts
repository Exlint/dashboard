import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { QueryBus } from '@nestjs/cqrs';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { Request } from 'express';

import type { IEnvironment } from '@/config/env.interface';
import type { IJwtTokenPayload } from '@/interfaces/jwt-token';

import { ValidRefreshTokenContract } from '../queries/contracts/valid-refresh-token.contract';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'refresh-token') {
	constructor(
		protected configService: ConfigService<IEnvironment, true>,
		private readonly queryBus: QueryBus,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get('refreshTokenJwtKey', { infer: true }),
			passReqToCallback: true,
		});
	}

	public async validate(request: Request, payload: IJwtTokenPayload) {
		// Authorization header won't be undefined as the "PassportStrategy" verifies it
		const refreshTokenHeader = request.headers.authorization!;
		const refreshToken = refreshTokenHeader.replace('Bearer ', '');

		const isValidRefreshToken = await this.queryBus.execute<ValidRefreshTokenContract, boolean>(
			new ValidRefreshTokenContract(payload.sub, refreshToken),
		);

		if (!isValidRefreshToken) {
			throw new UnauthorizedException();
		}

		return payload;
	}
}
