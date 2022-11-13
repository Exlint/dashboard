import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';

import { librariesData } from '@/data/libraries-data';

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

	public async getRules(policyId: string) {
		const [policyRecord, policyEnabledRulesRecords] = await this.prisma.$transaction([
			this.prisma.inlinePolicy.findUniqueOrThrow({
				where: { id: policyId },
				select: { library: true },
			}),
			this.prisma.rule.findMany({
				where: { policyId },
				select: { id: true, configuration: true, name: true },
			}),
		]);

		const libraryData = librariesData.find((library) => library.name === policyRecord.library)!;

		const selectedRules = Object.keys(libraryData.rules!).map((ruleName) => {
			const ruleData = libraryData.rules![ruleName]!;
			const ruleRecord = policyEnabledRulesRecords.find((ruleRecord) => ruleRecord.name === ruleName);

			return {
				...ruleData,
				id: ruleRecord?.id ?? null,
				name: ruleName,
				configuration: (ruleRecord?.configuration ?? null) as Prisma.JsonArray | null,
			};
		});

		return selectedRules;
	}
}
