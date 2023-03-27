import { type INestApplication, type OnModuleInit, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import promiseRetry from 'promise-retry';

import { JWT_REFRESH_TOKEN_DURATION_MINUTES } from '@/models/jwt-token';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	public async onModuleInit() {
		try {
			await promiseRetry((retry) => this.$connect().catch(retry), { retries: 5 });
		} catch {
			process.exit(1);
		}

		// * https://github.com/prisma/prisma/issues/5430#issuecomment-1098715558
		await this.$runCommandRaw({
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
		}).catch(() => {
			return;
		});
	}

	public enableShutdownHooks(app: INestApplication) {
		this.$on('beforeExit', async () => {
			await app.close();
		});
	}
}
