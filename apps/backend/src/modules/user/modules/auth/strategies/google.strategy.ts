import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IEnvironment } from '@/config/env.interface';

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

	validate(_: string, __: string, profile: IGoogleProfile, done: VerifyCallback): void {
		const data = {
			email: profile.emails[0]!.value,
			name: `${profile.name.givenName} ${profile.name.familyName}`,
		};

		done(null, data);
	}
}
