import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';

import type { IEnvironment } from '@/config/env.interface';

import type { IExternalAuthUser } from '../interfaces/external-auth-user';
import type { IGoogleProfile } from '../interfaces/google';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			clientID: configService.get('googleOAuthClientId', { infer: true }),
			clientSecret: configService.get('googleOAuthClientSecret', { infer: true }),
			callbackURL: configService.get('googleOAuthRedirectUri', { infer: true }),
			scope: ['email', 'profile'],
			passReqToCallback: true,
		});
	}

	override authorizationParams(): { [key: string]: string } {
		return {
			access_type: 'offline',
		};
	}

	validate(
		req: Request,
		_: string,
		refreshToken: string | undefined,
		profile: IGoogleProfile,
	): IExternalAuthUser {
		const port = req.query['state'] as string | undefined;

		return {
			port,
			email: profile.emails[0]!.value,
			name: `${profile.name.givenName} ${profile.name.familyName}`,
			externalToken: refreshToken,
		};
	}
}
