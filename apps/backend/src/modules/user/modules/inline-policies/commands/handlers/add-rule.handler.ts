import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { AddRuleContract } from '../contracts/add-rule.contract';
import { CreateRuleMixpanelContract } from '../../events/contracts/create-rule-mixpanel.contract';

@CommandHandler(AddRuleContract)
export class AddRuleHandler implements ICommandHandler<AddRuleContract> {
	constructor(
		private readonly dbInlinePolicyService: DBInlinePolicyService,
		private readonly eventBus: EventBus,
	) {}

	async execute(contract: AddRuleContract) {
		const parsedRule = JSON.parse(contract.rule);

		await this.dbInlinePolicyService.addRule(contract.policyId, parsedRule);

		this.eventBus.publish(new CreateRuleMixpanelContract(contract.userId, contract.ip));
	}
}
