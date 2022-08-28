import { type IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { CreateInlineContract } from '../contracts/create-inline.contract';
import { CreatePolicyMixpanelContract } from '../../events/contracts/create-policy-mixpanel.contract';

@QueryHandler(CreateInlineContract)
export class CreateInlineHandler implements IQueryHandler<CreateInlineContract> {
	constructor(
		private readonly dbInlinePolicyService: DBInlinePolicyService,
		private readonly eventBus: EventBus,
	) {}

	async execute(contract: CreateInlineContract) {
		const createdInlinePolicyId = await this.dbInlinePolicyService.createInlinePolicy(
			contract.groupId,
			contract.label,
			contract.library,
		);

		this.eventBus.publish(new CreatePolicyMixpanelContract(contract.userId, contract.ip));

		return createdInlinePolicyId;
	}
}
