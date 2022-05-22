import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

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
}
