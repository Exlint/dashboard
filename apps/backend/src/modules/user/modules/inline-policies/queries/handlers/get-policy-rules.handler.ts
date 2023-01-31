import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IGetPolicyRulesResponseData } from '@exlint.io/common';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';
import { librariesData } from '@/data/libraries-data';

import { GetPolicyRulesContract } from '../contracts/get-policy-rules.contract';

@QueryHandler(GetPolicyRulesContract)
export class GetPolicyRulesHandler implements IQueryHandler<GetPolicyRulesContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: GetPolicyRulesContract): Promise<IGetPolicyRulesResponseData> {
		const isPageANumber = !isNaN(parseInt(contract.page ?? ''));
		const page = isPageANumber ? parseInt(contract.page!) : 1;

		const policyRecord = await this.dbInlinePolicyService.getPolicyRules(contract.policyId, page);

		const matchingLibraryData = librariesData.find(
			(libraryItem) => libraryItem.name === contract.library,
		)!;

		const transformedRules = policyRecord.rules.map((ruleItem) => {
			const ruleData = matchingLibraryData.rules![ruleItem.name]!;

			return { ...ruleItem, category: ruleData.category, hasAutofix: ruleData.hasAutofix };
		});

		return {
			...policyRecord,
			rules: transformedRules,
			types: matchingLibraryData.types,
			categories: matchingLibraryData.categories,
			createdAt: policyRecord.createdAt.getTime(),
		};
	}
}
