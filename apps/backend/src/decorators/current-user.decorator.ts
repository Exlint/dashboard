import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

export const CurrentUser = createParamDecorator(
	(data: keyof Pick<User, 'id' | 'name'> | undefined, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest();

		if (!data) {
			return request.user;
		}

		return request.user[data];
	},
);
