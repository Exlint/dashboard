import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { PrismaService } from './modules/database/prisma.service';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import type { IEnvironment } from './config/env.interface';
import { DatabaseNotFoundExceptionFilter } from './filters/database-not-found.filter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: process.env.NODE_ENV === 'production' ? false : undefined,
	});

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}

	// Apply validation pipe for controllers' request data
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);

	app.useGlobalFilters(new DatabaseNotFoundExceptionFilter());
	app.useGlobalInterceptors(new LoggingInterceptor());

	app.use(helmet());

	// * https://github.com/prisma/prisma/issues/2917#issuecomment-708340112
	const prismaService = app.get(PrismaService);

	prismaService.enableShutdownHooks(app);

	const config = app.get<ConfigService<IEnvironment, true>>(ConfigService);
	const nodeEnv = config.get('nodeEnv', { infer: true });
	const frontendUrl = config.get('frontendUrl', { infer: true });

	app.enableCors({ origin: frontendUrl });

	if (nodeEnv === 'development') {
		const swaggerConfig = new DocumentBuilder()
			.setTitle('Exlint Dashboard')
			.setDescription('The Exlint Dashboard API Descritpion')
			.setVersion('1.0')
			.addTag('exlint')
			.build();

		const document = SwaggerModule.createDocument(app, swaggerConfig);

		SwaggerModule.setup('api', app, document);
	}

	const port = config.get('port', { infer: true });

	await app.listen(port);
}

bootstrap();
