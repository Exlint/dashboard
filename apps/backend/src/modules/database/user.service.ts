import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { MAX_JWT_REFRESH_TOKENS } from '@/models/jwt-token';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBUserService {
	constructor(private prisma: PrismaService) {}

	public createUser(data: Prisma.UserCreateInput) {
		return this.prisma.user.create({
			data,
			select: { id: true },
		});
	}

	public findByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
			select: { passwordHash: true, id: true, name: true },
		});
	}

	public async emailExists(email: string) {
		const user = await this.prisma.user.findUnique({ where: { email } });

		return !!user;
	}

	public async addRefreshToken(userId: string, token: string) {
		await this.prisma.refreshToken.create({ data: { userId, token } });
	}

	public async removeOldRefreshTokens(userId: string) {
		const userRefreshTokens = await this.prisma.refreshToken.findMany({
			where: { userId },
			select: { id: true },
			orderBy: { createdAt: 'asc' },
		});

		if (userRefreshTokens.length >= MAX_JWT_REFRESH_TOKENS) {
			const firstTokenId = userRefreshTokens[0]!.id;

			await this.prisma.refreshToken.delete({ where: { id: firstTokenId } });
		}
	}
}
