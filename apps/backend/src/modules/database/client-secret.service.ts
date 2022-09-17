import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBClientSecretService {
	constructor(private prisma: PrismaService) {}

	public async doesSecretBelongUser(userId: string, secretId: string) {
		const secretDB = await this.prisma.secret.findFirst({ where: { userId, id: secretId } });

		return secretDB !== null;
	}

	public async deleteSecret(secretId: string) {
		await this.prisma.secret.delete({ where: { id: secretId } });
	}

	public async revokeAllSecrets(userId: string) {
		await this.prisma.secret.deleteMany({ where: { userId } });
	}

	public async refreshSecret(secretId: string, newSecret: string) {
		await this.prisma.secret.update({ where: { id: secretId }, data: { secret: newSecret } });
	}

	public async editSecretLabel(secretId: string, newLabel: string) {
		await this.prisma.secret.update({ where: { id: secretId }, data: { label: newLabel } });
	}

	public createSecret(userId: string, secret: string, label: string, expiration: Date | null) {
		return this.prisma.secret.create({
			data: { secret, userId, label, expiration },
			select: { id: true },
		});
	}

	public getSecrets(userId: string) {
		return this.prisma.secret.findMany({
			where: { userId },
			select: {
				id: true,
				label: true,
				expiration: true,
			},
			orderBy: { createdAt: 'asc' },
		});
	}

	public async getSecretExpiration(secretId: string) {
		const secret = await this.prisma.secret.findUniqueOrThrow({
			where: { id: secretId },
			select: { expiration: true },
		});

		return secret.expiration;
	}

	public async isLabelAvailable(userId: string, label: string) {
		const record = await this.prisma.secret.findFirst({
			where: { userId, label },
		});

		return record === null;
	}
}
