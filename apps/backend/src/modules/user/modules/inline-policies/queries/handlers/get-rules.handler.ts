import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetRulesContract } from '../contracts/get-rules.contract';

@CommandHandler(GetRulesContract)
export class GetRulesHandler implements ICommandHandler<GetRulesContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetRulesContract) {
		return this.dbInlinePolicyService.getRules(contract.policyId);
	}
}
