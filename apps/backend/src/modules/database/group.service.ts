import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBGroupService {
	constructor(private prisma: PrismaService) {}

	public async createGroup(userId: string, label: string, description: string | null) {
		const createdGroup = await this.prisma.group.create({
			data: { userId, label, description },
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

	public async editGroupDescription(groupId: string, description: string | null) {
		await this.prisma.group.update({ where: { id: groupId }, data: { description } });
	}

	public async deleteGroup(groupId: string) {
		await this.prisma.group.delete({ where: { id: groupId } });
	}

	public getUserGroups(userId: string) {
		return this.prisma.group.findMany({
			where: { userId },
			select: {
				id: true,
				label: true,
				inlinePolicies: {
					select: { library: true },
				},
			},
		});
	}

	public async isLabelAvailable(userId: string, label: string) {
		const record = await this.prisma.group.findFirst({
			where: { userId, label },
		});

		return record === null;
	}

	public getUserGroup(groupId: string) {
		return this.prisma.group.findUnique({
			where: { id: groupId },
			select: {
				label: true,
			},
		});
	}

	public async getInlinePoliciesAndDescription(groupId: string, page: number) {
		const [count, policies] = await this.prisma.$transaction([
			this.prisma.inlinePolicy.count({
				where: {
					groupId,
				},
			}),
			this.prisma.group.findUniqueOrThrow({
				where: { id: groupId },
				select: {
					description: true,
					inlinePolicies: {
						select: {
							id: true,
							label: true,
							library: true,
						},
						take: 10,
						skip: 10 * (page - 1),
					},
				},
			}),
		]);

		return {
			...policies,
			count,
		};
	}
}
