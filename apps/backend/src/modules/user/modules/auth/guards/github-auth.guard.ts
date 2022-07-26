import { type ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GithubAuthGuard extends AuthGuard('github') {
	override getAuthenticateOptions(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const port = request.query['port'];

		return { state: port };
	}
}
