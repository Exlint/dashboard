import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IEnvironment } from '@/config/env.interface';
import { IExternalAuthUser } from '@/modules/user/modules/auth/interfaces/external-auth-user';

import { IGoogleProfile } from '../interfaces/google';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			clientID: configService.get('googleOAuthClientId', { infer: true }),
			clientSecret: configService.get('googleOAuthClientSecret', { infer: true }),
			callbackURL: configService.get('googleOAuthRedirectUri', { infer: true }),
			scope: ['email', 'profile'],
		});
	}

	override authorizationParams(): { [key: string]: string } {
		return {
			access_type: 'offline',
		};
	}

	validate(_: string, refreshToken: string | undefined, profile: IGoogleProfile): IExternalAuthUser {
		return {
			email: profile.emails[0]!.value,
			name: `${profile.name.givenName} ${profile.name.familyName}`,
			externalToken: refreshToken,
		};
	}
}
