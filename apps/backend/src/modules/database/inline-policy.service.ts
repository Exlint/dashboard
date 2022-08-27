import { Injectable } from '@nestjs/common';
import type { PolicyLibrary, Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBInlinePolicyService {
	constructor(private prisma: PrismaService) {}

	public async createInlinePolicy(groupId: string, label: string, library: PolicyLibrary) {
		const createdInlinePolicy = await this.prisma.inlinePolicy.create({
			data: { groupId, label, library },
			select: { id: true },
		});

		return createdInlinePolicy.id;
	}

	public async deleteInlinePolicy(inlinePolicyId: string) {
		await this.prisma.inlinePolicy.delete({ where: { id: inlinePolicyId } });
	}

	public async updateConfiguration(inlinePolicyId: string, configuration: Record<string, unknown>) {
		await this.prisma.inlinePolicy.update({
			where: { id: inlinePolicyId },
			data: { configuration: configuration as Prisma.JsonObject },
		});
	}

	public async doesInlinePolicyBelongUser(inlinePolicyId: string, userId: string) {
		const inlinePolicyDB = await this.prisma.inlinePolicy.findFirst({
			where: { id: inlinePolicyId, group: { userId } },
		});

		return inlinePolicyDB !== null;
	}

	public async addRule(inlinePolicyId: string, rule: Record<string, unknown>) {
		const inlinePolicyDB = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: inlinePolicyId },
			select: { rules: true },
		});

		let newInlinePolicyRules: Prisma.JsonObject;

		if (!inlinePolicyDB.rules) {
			newInlinePolicyRules = rule as Prisma.JsonObject;
		} else {
			newInlinePolicyRules = {
				...(inlinePolicyDB.rules as Prisma.JsonObject),
				...rule,
			} as Prisma.JsonObject;
		}

		await this.prisma.inlinePolicy.update({
			where: { id: inlinePolicyId },
			data: { rules: newInlinePolicyRules },
		});
	}

	public async removeRule(inlinePolicyId: string, ruleName: string) {
		const inlinePolicyDB = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: inlinePolicyId },
			select: { rules: true },
		});

		if (!inlinePolicyDB.rules) {
			return;
		}

		const rulesWithoutRule = {
			...(inlinePolicyDB.rules as Prisma.JsonObject),
			[ruleName]: undefined,
		};

		await this.prisma.inlinePolicy.update({
			where: { id: inlinePolicyId },
			data: { rules: rulesWithoutRule },
		});
	}

	public getConfiguration(inlinePolicyId: string) {
		return this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: inlinePolicyId },
			select: { configuration: true },
		});
	}

	public getData(inlinePolicyId: string) {
		return this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: inlinePolicyId },
			select: { label: true, createdAt: true, library: true },
		});
	}
}
