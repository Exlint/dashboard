import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { IEnvironment } from '@/config/env.interface';

import type { IJwtTokenVerification } from './interfaces/jwt-token';
import { JwtTokenType, JWT_ACCESS_TOKEN_DURATION, JWT_REFRESH_TOKEN_DURATION } from './models/jwt-token';

@Injectable()
export class AuthService {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	public async hashPassword(password: string) {
		const hashedPassword = await bcrypt.hash(password, 8);

		return hashedPassword;
	}

	public async comparePassword(password: string, hashPassword: string) {
		const comparison = await bcrypt.compare(password, hashPassword);

		return comparison;
	}

	public generateJwtToken(userId: string, tokenType: JwtTokenType) {
		const tokenDuration =
			tokenType === JwtTokenType.Access ? JWT_ACCESS_TOKEN_DURATION : JWT_REFRESH_TOKEN_DURATION;

		const token = jwt.sign({ userId }, this.configService.get('jwtKey', { infer: true }), {
			expiresIn: tokenDuration,
		});

		return token;
	}

	public getUserIdFromJwtToken(token: string) {
		const verification = jwt.verify(
			token,
			this.configService.get('jwtKey', { infer: true }),
		) as IJwtTokenVerification;

		return verification.userId;
	}
}
