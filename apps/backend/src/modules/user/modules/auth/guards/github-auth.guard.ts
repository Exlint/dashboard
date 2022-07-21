import { type ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

import type { IEnvironment } from '@/config/env.interface';

@Injectable()
export class GithubAuthGuard extends AuthGuard('github') {
	constructor(private configService: ConfigService<IEnvironment, true>) {
		super();
	}

	override getAuthenticateOptions(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();

		const port = request.query['port'];
		const callbackUrl = this.configService.get('githubOAuthRedirectUri', { infer: true });

		if (typeof port === 'string') {
			return {
				callbackURL: `${callbackUrl}?port=${port}`,
			};
		}

		return { callbackURL: callbackUrl };
	}
}
