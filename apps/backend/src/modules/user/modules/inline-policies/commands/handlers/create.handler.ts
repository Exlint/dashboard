import { CommandHandler, EventBus, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { CreateMixpanelContract } from '../../events/contracts/create-mixpanel.contract';
import { CreateContract } from '../contracts/create.contract';

@CommandHandler(CreateContract)
export class CreateInlineHandler implements ICommandHandler<CreateContract> {
	constructor(
		private readonly dbInlinePolicyService: DBInlinePolicyService,
		private readonly eventBus: EventBus,
	) {}

	async execute(contract: CreateContract) {
		await this.dbInlinePolicyService.createInlinePolicy(
			contract.groupId,
			contract.label,
			contract.description,
			contract.library,
		);

		this.eventBus.publish(new CreateMixpanelContract(contract.userId, contract.ip));
	}
}
