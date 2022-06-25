import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { EditRuleContract } from '../contracts/edit-rule.contract';

@CommandHandler(EditRuleContract)
export class EditRuleHandler implements ICommandHandler<EditRuleContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: EditRuleContract) {
		const parsedRule = JSON.parse(contract.rule);

		await this.dbInlinePolicyService.addRule(contract.policyId, parsedRule);
	}
}
