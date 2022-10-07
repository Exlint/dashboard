import { QueryHandler, EventBus, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { CreateMixpanelContract } from '../../events/contracts/create-mixpanel.contract';
import { CreateContract } from '../contracts/create.contract';

@QueryHandler(CreateContract)
export class CreateHandler implements IQueryHandler<CreateContract> {
	constructor(
		private readonly dbInlinePolicyService: DBInlinePolicyService,
		private readonly eventBus: EventBus,
	) {}

	async execute(contract: CreateContract) {
		const createdPolicyId = await this.dbInlinePolicyService.createInlinePolicy(
			contract.groupId,
			contract.label,
			contract.description,
			contract.library,
		);

		this.eventBus.publish(new CreateMixpanelContract(contract.userId, contract.ip));

		return createdPolicyId;
	}
}
