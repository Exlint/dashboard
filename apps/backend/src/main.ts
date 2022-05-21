import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PrismaService } from './modules/database/prisma.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Apply validation pipe for controllers' request data
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);

	// * https://github.com/prisma/prisma/issues/2917#issuecomment-708340112
	const prismaService: PrismaService = app.get(PrismaService);

	prismaService.enableShutdownHooks(app);

	await app.listen(3000);
}

bootstrap();
