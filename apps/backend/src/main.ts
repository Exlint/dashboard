import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { PrismaService } from './modules/database/prisma.service';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import type { IEnvironment } from './config/env.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

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

	app.useGlobalInterceptors(new LoggingInterceptor());

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
			.addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'Token' }, 'access-token')
			.addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'Token' }, 'refresh-token')
			.build();

		const document = SwaggerModule.createDocument(app, swaggerConfig);

		SwaggerModule.setup('api', app, document);
	}

	const port = config.get('port', { infer: true });

	await app.listen(port);
}

bootstrap();
