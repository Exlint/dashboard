import {
	Injectable,
	Logger,
	type NestInterceptor,
	type ExecutionContext,
	type CallHandler,
} from '@nestjs/common';
import type { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
		const logger = new Logger(`${context.getClass().name}/${context.getHandler().name}`);

		logger.log('Started');

		return next.handle();
	}
}
