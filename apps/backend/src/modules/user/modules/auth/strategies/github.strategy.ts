import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IEnvironment } from '@/config/env.interface';

import { IGithubProfile, IGithubUser } from '../interfaces/github';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
	constructor(configService: ConfigService<IEnvironment, true>) {
		super({
			clientID: configService.get('githubOAuthClientId', { infer: true }),
			clientSecret: configService.get('githubOAuthClientSecret', { infer: true }),
			callbackURL: configService.get('githubOAuthRedirectUri', { infer: true }),
			scope: ['user:email'],
		});
	}

	validate(_: string, __: string, profile: IGithubProfile): IGithubUser {
		return {
			email: profile.emails[0]!.value,
			name: profile.displayName ?? profile.username,
		};
	}
}
