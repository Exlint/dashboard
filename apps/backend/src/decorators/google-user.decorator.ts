import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GoogleUser = createParamDecorator(
	(data: 'email' | 'name' | undefined, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest();

		if (!data) {
			return request.user;
		}

		return request.user[data];
	},
);
