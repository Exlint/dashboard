import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetRulesContract } from '../contracts/get-rules.contract';

@QueryHandler(GetRulesContract)
export class GetRulesHandler implements IQueryHandler<GetRulesContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetRulesContract) {
		return this.dbInlinePolicyService.getRules(contract.policyId);
	}
}
