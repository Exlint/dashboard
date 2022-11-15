import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBRuleService {
	constructor(private prisma: PrismaService) {}

	public async doesRuleBelongUser(ruleId: string, userId: string) {
		const ruleRecord = await this.prisma.rule.findFirst({
			where: { id: ruleId, policy: { group: { userId } } },
		});

		return ruleRecord !== null;
	}

	public async deleteRule(ruleId: string) {
		await this.prisma.rule.delete({ where: { id: ruleId } });
	}

	public getConfiguredRules(policyId: string) {
		return this.prisma.rule.findMany({
			where: { policyId },
			select: { id: true, configuration: true, name: true, isEnabled: true },
		});
	}

	public async enableExistRule(ruleId: string) {
		await this.prisma.rule.update({ where: { id: ruleId }, data: { isEnabled: true } });
	}

	public enableMissingRule(policyId: string, name: string) {
		return this.prisma.rule.create({
			data: { policyId, name, isEnabled: true },
			select: { id: true },
		});
	}

	public async disableRule(ruleId: string) {
		await this.prisma.rule.update({ where: { id: ruleId }, data: { isEnabled: false } });
	}

	public async updateRuleConfiguration(ruleId: string, configuration: Prisma.JsonArray) {
		await this.prisma.rule.update({ where: { id: ruleId }, data: { configuration } });
	}

	public configureMissing(policyId: string, name: string, configuration: Prisma.JsonArray) {
		return this.prisma.rule.create({ data: { policyId, name, configuration, isEnabled: false } });
	}
}
