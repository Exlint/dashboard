import { type ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GithubAuthGuard extends AuthGuard('github') {
	public override getAuthenticateOptions(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const port = request.query['port'];

		return { state: port };
	}
}
