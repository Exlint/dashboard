import url from 'url';

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IEnvironment } from '@/config/env.interface';

import { IExternalAuthUser } from '../interfaces/external-auth-user';
import { IGoogleProfile } from '../interfaces/google';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			clientID: configService.get('googleOAuthClientId', { infer: true }),
			clientSecret: configService.get('googleOAuthClientSecret', { infer: true }),
			callbackURL: configService.get('googleOAuthRedirectUri', { infer: true }),
			scope: ['email'],
			passReqToCallback: true,
		});
	}

	override authorizationParams(): { [key: string]: string } {
		return {
			access_type: 'offline',
		};
	}

	validate(
		request: Request,
		_: string,
		__: string | undefined,
		profile: IGoogleProfile,
	): IExternalAuthUser {
		const queryObject = url.parse(request.url, true).query;
		const port = queryObject['port'];

		if (!port || typeof port !== 'string') {
			throw new BadRequestException();
		}

		return {
			email: profile.emails[0]!.value,
			port,
		};
	}
}
