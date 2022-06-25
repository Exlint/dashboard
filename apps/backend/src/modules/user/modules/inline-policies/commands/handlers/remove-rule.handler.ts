import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { RemoveRuleContract } from '../contracts/remove-rule.contract';

@CommandHandler(RemoveRuleContract)
export class RemoveRuleHandler implements ICommandHandler<RemoveRuleContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: RemoveRuleContract) {
		await this.dbInlinePolicyService.removeRule(contract.policyId, contract.ruleName);
	}
}
