import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IGetRulesResponseData } from '@exlint-dashboard/common';

import { DBRuleService } from '@/modules/database/rule.service';
import { librariesData } from '@/data/libraries-data';

import { GetRulesContract } from '../contracts/get-rules.contract';

@QueryHandler(GetRulesContract)
export class GetRulesHandler implements IQueryHandler<GetRulesContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: GetRulesContract): Promise<IGetRulesResponseData['rules']> {
		const policyConfiguredRulesRecords = await this.dbRuleService.getConfiguredRules(contract.policyId);

		const libraryData = librariesData.find((library) => library.name === contract.policyLibrary)!;

		const selectedRules = Object.keys(libraryData.rules!).map((ruleName) => {
			const ruleData = libraryData.rules![ruleName]!;

			const ruleRecord = policyConfiguredRulesRecords.find(
				(ruleRecord) => ruleRecord.name === ruleName,
			);

			return {
				...ruleData,
				id: ruleRecord?.id ?? null,
				name: ruleName,
				configuration: ruleRecord?.configuration ?? null,
				isEnabled: ruleRecord?.isEnabled ?? false,
			};
		});

		return selectedRules;
	}
}
