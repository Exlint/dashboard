import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';

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

	public findByEmail(email: string, select: Prisma.UserSelect) {
		return this.prisma.user.findUnique({
			where: { email },
			select,
		});
	}

	public findExternalUserByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
			select: {
				id: true,
				authType: true,
			},
		});
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

	public async deleteUser(userId: string) {
		await this.prisma.user.delete({ where: { id: userId } });
	}

	public async updateExternalToken(userId: string, externalToken: string) {
		await this.prisma.user.update({ where: { id: userId }, data: { externalToken } });
	}

	public async getAuthTypeData(userId: string) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
			select: { authType: true, externalToken: true },
		});

		return user;
	}

	public async isRefreshTokenValid(userId: string, token: string) {
		const tokenDocument = await this.prisma.refreshToken.findFirst({ where: { userId, token } });

		return tokenDocument !== null;
	}
}
