import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

export const Library = createParamDecorator((_: undefined, context: ExecutionContext) => {
	const request = context.switchToHttp().getRequest();

	return request.policyLibrary;
});
