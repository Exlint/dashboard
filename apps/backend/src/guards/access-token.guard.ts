import { Injectable, type ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AccessTokenGuard extends AuthGuard('access-token') {
	constructor(private reflector: Reflector) {
		super();
	}

	public override canActivate(context: ExecutionContext) {
		const isPublic = this.reflector.getAllAndOverride('isPublic', [
			context.getHandler(),
			context.getClass(),
		]);

		if (isPublic) {
			return true;
		}

		return super.canActivate(context);
	}
}
