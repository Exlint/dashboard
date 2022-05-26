import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';

import { IEnvironment } from '@/config/env.interface';
import { JWT_REFRESH_TOKEN_DURATION_MINUTES } from '@/models/jwt-token';

import { JwtTokenType, JWT_ACCESS_TOKEN_DURATION } from './models/jwt-token';

@Injectable()
export class AuthService {
	constructor(
		private readonly configService: ConfigService<IEnvironment, true>,
		private readonly jwtService: JwtService,
	) {}

	public async hashPassword(password: string) {
		const hashedPassword = await bcrypt.hash(password, 8);

		return hashedPassword;
	}

	public async comparePassword(password: string, hashPassword: string) {
		const comparison = await bcrypt.compare(password, hashPassword);

		return comparison;
	}

	public async generateJwtToken(userId: string, email: string, tokenType: JwtTokenType) {
		const jwtPayload = {
			sub: userId,
			email,
		};

		const tokenDuration =
			tokenType === JwtTokenType.Access
				? JWT_ACCESS_TOKEN_DURATION
				: JWT_REFRESH_TOKEN_DURATION_MINUTES;

		const jwtSecret = this.configService.get(
			tokenType === JwtTokenType.Access ? 'accessTokenJwtKey' : 'refreshTokenJwtKey',
			{ infer: true },
		);

		const token = await this.jwtService.signAsync(jwtPayload, {
			secret: jwtSecret,
			expiresIn: tokenDuration,
		});

		return token;
	}

	public async generateJwtTokens(userId: string, email: string) {
		const tokens = await Promise.all([
			this.generateJwtToken(userId, email, JwtTokenType.Access),
			this.generateJwtToken(userId, email, JwtTokenType.Refresh),
		]);

		return tokens;
	}
}
