import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBGroupService {
	constructor(private prisma: PrismaService) {}

	public async doesGroupBelongUser(userId: string, groupId: string) {
		const groupDB = await this.prisma.group.findFirst({ where: { userId, id: groupId } });

		return groupDB !== null;
	}

	public getGroup(groupId: string) {
		return this.prisma.group.findFirst({
			where: { id: groupId },
			select: {
				id: true,
				inlinePolicies: {
					select: { id: true, label: true, library: true, configuration: true },
				},
			},
		});
	}
}
