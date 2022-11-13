import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IGetRulesResponseData } from '@exlint-dashboard/common';

import { DBRuleService } from '@/modules/database/rule.service';

import { GetRulesContract } from '../contracts/get-rules.contract';

@QueryHandler(GetRulesContract)
export class GetRulesHandler implements IQueryHandler<GetRulesContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	execute(contract: GetRulesContract): Promise<IGetRulesResponseData['rules']> {
		return this.dbRuleService.getRules(contract.policyId);
	}
}
