import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

import EnvConfiguration from './config/configuration';
import { validate } from './config/env.validation';
import { AppModule } from './app.module';
import { PrismaService } from './modules/database/prisma.service';
import { LoggingInterceptor } from './interceptors/logger.interceptor';

async function bootstrap() {
	const appContext = await NestFactory.createApplicationContext(
		ConfigModule.forRoot({
			load: [EnvConfiguration],
			isGlobal: true,
			cache: true,
			validate,
			validationOptions: {
				allowUnknown: false,
				abortEarly: true,
			},
		}),
	);

	const configService = appContext.get(ConfigService);

	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	// Apply validation pipe for controllers' request data
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);

	app.useGlobalInterceptors(new LoggingInterceptor());

	// * https://github.com/prisma/prisma/issues/2917#issuecomment-708340112
	const prismaService: PrismaService = app.get(PrismaService);

	prismaService.enableShutdownHooks(app);

	const port = configService.get<string>('port', { infer: true })!;

	await app.listen(port);

	appContext.close();
}

bootstrap();
