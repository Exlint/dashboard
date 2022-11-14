import { Injectable } from '@nestjs/common';

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

	public getEnabledRules(policyId: string) {
		return this.prisma.rule.findMany({
			where: { policyId },
			select: { id: true, configuration: true, name: true },
		});
	}

	public enableRule(policyId: string, name: string) {
		return this.prisma.rule.create({
			data: { policyId, name },
			select: { id: true },
		});
	}
}
