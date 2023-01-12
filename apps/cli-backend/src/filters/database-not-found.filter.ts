import { type ExceptionFilter, Catch, type ArgumentsHost, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import type { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class DatabaseNotFoundExceptionFilter implements ExceptionFilter {
	public catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
		if (exception.code === 'P2015') {
			const ctx = host.switchToHttp();
			const response = ctx.getResponse<Response>();

			return response.status(HttpStatus.NOT_FOUND).send();
		}

		throw exception;
	}
}
