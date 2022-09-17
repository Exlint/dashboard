import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBGroupService {
	constructor(private prisma: PrismaService) {}

	public async createGroup(userId: string) {
		const createdGroup = await this.prisma.group.create({
			data: { userId },
			select: { id: true },
		});

		return createdGroup.id;
	}

	public async doesGroupBelongUser(userId: string, groupId: string) {
		const groupDB = await this.prisma.group.findFirst({ where: { userId, id: groupId } });

		return groupDB !== null;
	}

	public async editGroupLabel(groupId: string, label: string) {
		await this.prisma.group.update({ where: { id: groupId }, data: { label } });
	}

	public async deleteGroup(groupId: string) {
		await this.prisma.group.delete({ where: { id: groupId } });
	}

	public async getUserGroups(userId: string) {
		const userGroups = await this.prisma.group.findMany({
			where: { userId },
			select: {
				id: true,
				label: true,
				inlinePolicies: {
					select: { id: true, label: true, library: true, configuration: true },
				},
			},
		});

		return userGroups;
	}
}
