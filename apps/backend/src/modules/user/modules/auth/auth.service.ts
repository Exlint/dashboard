import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { google } from 'googleapis';
import { OAuthApp } from '@octokit/oauth-app';

import type { IEnvironment } from '@/config/env.interface';
import { JWT_REFRESH_TOKEN_DURATION_MINUTES } from '@/models/jwt-token';

import { JwtTokenType, JWT_ACCESS_TOKEN_DURATION_MINUTES } from './models/jwt-token';

@Injectable()
export class AuthService {
	private googleClient = new google.auth.OAuth2({
		clientId: this.configService.get('googleOAuthClientId', { infer: true }),
		clientSecret: this.configService.get('googleOAuthClientSecret', { infer: true }),
	});

	private githubClient = new OAuthApp({
		clientId: this.configService.get('githubOAuthClientId', { infer: true }),
		clientSecret: this.configService.get('githubOAuthClientSecret', { infer: true }),
	});

	constructor(
		private readonly configService: ConfigService<IEnvironment, true>,
		private readonly jwtService: JwtService,
	) {}

	public async generateJwtToken(userId: string, email: string, tokenType: JwtTokenType) {
		const jwtPayload = {
			sub: userId,
			email,
		};

		const tokenDurationInMinutes =
			tokenType === JwtTokenType.Access
				? JWT_ACCESS_TOKEN_DURATION_MINUTES
				: JWT_REFRESH_TOKEN_DURATION_MINUTES;

		const jwtSecret = this.configService.get(
			tokenType === JwtTokenType.Access ? 'accessTokenJwtKey' : 'refreshTokenJwtKey',
			{ infer: true },
		);

		const token = await this.jwtService.signAsync(jwtPayload, {
			secret: jwtSecret,
			expiresIn: `${tokenDurationInMinutes}m`,
		});

		return token;
	}

	public async revokeGoogleToken(refreshToken: string) {
		await this.googleClient.revokeToken(refreshToken);
	}

	public async revokeGithubToken(accessToken: string) {
		await this.githubClient.deleteAuthorization({ token: accessToken });
	}
}
