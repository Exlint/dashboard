import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	public createUser(data: Prisma.UserCreateInput) {
		return this.prisma.user.create({
			data,
		});
	}
}
