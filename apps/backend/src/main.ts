import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { PrismaService } from './modules/database/prisma.service';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import { JWT_REFRESH_TOKEN_DURATION_MINUTES } from './models/jwt-token';
import type { IEnvironment } from './config/env.interface';

async function bootstrap() {
	const prisma = new PrismaClient();

	// * https://github.com/prisma/prisma/issues/5430#issuecomment-1098715558
	await prisma.$runCommandRaw({
		createIndexes: 'RefreshToken',
		indexes: [
			{
				key: {
					createdAt: 1,
				},
				name: 'Refresh Token Index',
				expireAfterSeconds: JWT_REFRESH_TOKEN_DURATION_MINUTES * 60,
			},
		],
	});

	const app = await NestFactory.create(AppModule);

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
			.addTag('exlint')
			.build();

		const document = SwaggerModule.createDocument(app, swaggerConfig);

		SwaggerModule.setup('api', app, document);
	}

	const port = config.get('port', { infer: true });

	await app.listen(port);
}

bootstrap();
