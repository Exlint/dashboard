import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';

import { IEnvironment } from '@/config/env.interface';

import { JWT_CLI_TOKEN_DURATION_DAYS } from './models/cli-token';

@Injectable()
export class AuthService {
	constructor(
		private readonly configService: ConfigService<IEnvironment, true>,
		private readonly jwtService: JwtService,
	) {}

	public async generateJwtCliToken(userId: string, email: string) {
		const jwtPayload = {
			sub: userId,
			email,
		};

		const token = await this.jwtService.signAsync(jwtPayload, {
			secret: this.configService.get('cliTokenJwtKey', { infer: true }),
			expiresIn: `${JWT_CLI_TOKEN_DURATION_DAYS} days`,
		});

		return token;
	}

	public async comparePassword(password: string, hashPassword: string) {
		const comparison = await bcrypt.compare(password, hashPassword);

		return comparison;
	}
}
