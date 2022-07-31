import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

export const ExternalAuthUser = createParamDecorator(
	(data: 'email' | 'port' | undefined, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest();

		if (!data) {
			return request.user;
		}

		return request.user[data];
	},
);
