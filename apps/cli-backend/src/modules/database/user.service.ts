import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBUserService {
	constructor(private prisma: PrismaService) {}

	public async doesUserIdExist(userId: string) {
		const user = await this.prisma.user.findUnique({ where: { id: userId } });

		return !!user;
	}

	public async isRefreshTokenValid(userId: string, token: string) {
		const tokenDocument = await this.prisma.refreshToken.findFirst({ where: { userId, token } });

		return tokenDocument !== null;
	}
}
