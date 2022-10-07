import { Injectable } from '@nestjs/common';
import type { PolicyLibrary } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBInlinePolicyService {
	constructor(private prisma: PrismaService) {}

	public async createInlinePolicy(
		groupId: string,
		label: string,
		description: string | null,
		library: PolicyLibrary,
	) {
		const createdRecord = await this.prisma.inlinePolicy.create({
			data: { groupId, label, description, library },
		});

		return createdRecord.id;
	}

	public async doesInlinePolicyBelongUser(inlinePolicyId: string, userId: string) {
		const inlinePolicyDB = await this.prisma.inlinePolicy.findFirst({
			where: { id: inlinePolicyId, group: { userId } },
		});

		return inlinePolicyDB !== null;
	}

	public async isLabelAvailable(userId: string, label: string) {
		const record = await this.prisma.inlinePolicy.findFirst({
			where: { label, group: { userId } },
		});

		return record === null;
	}

	public getUserGroupLibraries(groupId: string) {
		return this.prisma.inlinePolicy.findMany({ where: { groupId }, select: { library: true } });
	}

	public async groupHasLibrary(groupId: string, library: PolicyLibrary) {
		const record = await this.prisma.inlinePolicy.findFirst({ where: { groupId, library } });

		return record !== null;
	}

	public get(policyId: string) {
		return this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: {
				group: { select: { label: true } },
				label: true,
				library: true,
			},
		});
	}

	public async editPolicyLabel(policyId: string, label: string) {
		await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { label } });
	}

	public async deletePolicy(policyId: string) {
		await this.prisma.inlinePolicy.delete({ where: { id: policyId } });
	}
}
