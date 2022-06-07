import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { AddRuleContract } from '../contracts/add-rule.contract';

@CommandHandler(AddRuleContract)
export class AddRuleHandler implements ICommandHandler<AddRuleContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: AddRuleContract) {
		const parsedRule = JSON.parse(contract.rule);

		await this.dbInlinePolicyService.addRule(contract.policyId, parsedRule);
	}
}
