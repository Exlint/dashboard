import {
	type ExceptionFilter,
	Catch,
	type ArgumentsHost,
	type HttpException,
	HttpStatus,
} from '@nestjs/common';
import { NotFoundError } from '@prisma/client/runtime';
import type { Response } from 'express';

@Catch(NotFoundError)
export class DatabaseNotFoundExceptionFilter implements ExceptionFilter {
	public catch(_: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();

		return response.status(HttpStatus.NOT_FOUND).send();
	}
}
