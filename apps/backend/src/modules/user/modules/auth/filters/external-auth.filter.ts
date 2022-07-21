import { type ExceptionFilter, Catch, type ArgumentsHost, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Response } from 'express';

import type { IEnvironment } from '@/config/env.interface';

@Catch()
export class ExternalAuthFilter implements ExceptionFilter {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	public catch(_: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();

		return response
			.status(HttpStatus.MOVED_PERMANENTLY)
			.redirect(`${this.configService.get('frontendUrl')}/auth`);
	}
}
