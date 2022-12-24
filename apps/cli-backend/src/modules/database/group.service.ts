import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBGroupService {
	constructor(private prisma: PrismaService) {}

	public async doesGroupBelongUser(userId: string, groupId: string) {
		const groupDB = await this.prisma.group.findFirstOrThrow({ where: { userId, id: groupId } });

		return groupDB !== null;
	}

	public getGroup(groupId: string) {
		return this.prisma.group.findFirstOrThrow({
			where: { id: groupId },
			select: {
				inlinePolicies: {
					select: {
						library: true,
						formConfiguration: true,
						codeConfiguration: true,
						isFormConfiguration: true,
						codeType: true,
						lintedList: true,
						ignoredList: true,
						rules: {
							select: {
								name: true,
								configuration: true,
								isEnabled: true,
							},
						},
					},
				},
			},
		});
	}
}
