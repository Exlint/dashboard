import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

import type { IJwtTokenPayload } from '@/interfaces/jwt-token';

export const CurrentUserId = createParamDecorator((_: undefined, context: ExecutionContext) => {
	const request = context.switchToHttp().getRequest();
	const user = request.user as IJwtTokenPayload;

	return user.sub;
});
