import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBUserService {
	constructor(private prisma: PrismaService) {}

	public async doesUserIdExist(userId: string) {
		const user = await this.prisma.user.findUnique({ where: { id: userId } });

		return !!user;
	}

	public findByEmail(email: string, select: Prisma.UserSelect) {
		return this.prisma.user.findUnique({
			where: { email },
			select,
		});
	}
}
