import { type ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
	override getAuthenticateOptions(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const port = request.query['port'];

		return { state: port };
	}
}
