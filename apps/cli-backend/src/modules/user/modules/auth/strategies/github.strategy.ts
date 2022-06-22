import url from 'url';

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IEnvironment } from '@/config/env.interface';

import { IExternalAuthUser } from '../interfaces/external-auth-user';
import { IGithubProfile } from '../interfaces/github';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			clientID: configService.get('githubOAuthClientId', { infer: true }),
			clientSecret: configService.get('githubOAuthClientSecret', { infer: true }),
			callbackURL: configService.get('githubOAuthRedirectUri', { infer: true }),
			scope: ['user:email'],
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
		_: string | undefined,
		__: string,
		profile: IGithubProfile,
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
