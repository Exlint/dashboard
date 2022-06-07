import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { CreateInlineContract } from '../contracts/create-inline.contract';

@CommandHandler(CreateInlineContract)
export class CreateInlineHandler implements ICommandHandler<CreateInlineContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: CreateInlineContract) {
		const createdInlinePolicyId = await this.dbInlinePolicyService.createInlinePolicy(
			contract.groupId,
			contract.label,
			contract.library,
		);

		return createdInlinePolicyId;
	}
}
