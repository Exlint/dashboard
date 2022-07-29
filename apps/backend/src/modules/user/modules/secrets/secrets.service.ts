import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import type { IEnvironment } from '@/config/env.interface';

@Injectable()
export class SecretsService {
	constructor(
		private readonly configService: ConfigService<IEnvironment, true>,
		private readonly jwtService: JwtService,
	) {}

	public async generateSecret(userId: string, email: string, expiration: number | null) {
		const jwtPayload = {
			sub: userId,
			email,
		};

		const token = await this.jwtService.signAsync(jwtPayload, {
			secret: this.configService.get('cliTokenJwtKey', { infer: true }),
			...(expiration ? { expiresIn: expiration } : {}),
		});

		return token;
	}
}
