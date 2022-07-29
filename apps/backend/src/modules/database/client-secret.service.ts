import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBClientSecretService {
	constructor(private prisma: PrismaService) {}

	public async doesSecretBelongUser(userId: string, secretId: string) {
		const secretDB = await this.prisma.clientSecret.findFirst({ where: { userId, id: secretId } });

		return secretDB !== null;
	}

	public async deleteSecret(secretId: string) {
		await this.prisma.clientSecret.delete({ where: { id: secretId } });
	}

	public async revokeAllSecrets(userId: string) {
		await this.prisma.clientSecret.deleteMany({ where: { userId } });
	}

	public async refreshSecret(secretId: string, newSecret: string) {
		await this.prisma.clientSecret.update({ where: { id: secretId }, data: { secret: newSecret } });
	}

	public async editSecretLabel(secretId: string, newLabel: string) {
		await this.prisma.clientSecret.update({ where: { id: secretId }, data: { label: newLabel } });
	}

	public async createSecret(userId: string, secret: string, label: string, expiration: Date | null) {
		await this.prisma.clientSecret.create({ data: { secret, userId, label, expiration } });
	}

	public getSecrets(userId: string) {
		return this.prisma.clientSecret.findMany({
			where: { userId },
			select: {
				id: true,
				label: true,
				createdAt: true,
				expiration: true,
			},
		});
	}
}
