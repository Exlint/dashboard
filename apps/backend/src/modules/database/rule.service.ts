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
}
