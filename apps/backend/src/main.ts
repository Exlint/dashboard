import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

import { AppModule } from './app.module';
import { PrismaService } from './modules/database/prisma.service';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import { JWT_REFRESH_TOKEN_DURATION_MINUTES } from './models/jwt-token';
import { IEnvironment } from './config/env.interface';

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
	const port = config.get('port', { infer: true });

	await app.listen(port);
}

bootstrap();
