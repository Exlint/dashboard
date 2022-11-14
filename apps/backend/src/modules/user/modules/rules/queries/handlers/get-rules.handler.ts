import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import type { Prisma } from '@prisma/client';

import { DBRuleService } from '@/modules/database/rule.service';
import { librariesData } from '@/data/libraries-data';

import { GetRulesContract } from '../contracts/get-rules.contract';

@QueryHandler(GetRulesContract)
export class GetRulesHandler implements IQueryHandler<GetRulesContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: GetRulesContract): Promise<IGetRulesResponseData['rules']> {
		const policyEnabledRulesRecords = await this.dbRuleService.getEnabledRules(contract.policyId);

		const libraryData = librariesData.find((library) => library.name === contract.policyLibrary)!;

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
