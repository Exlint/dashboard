import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { DeleteInlineContract } from '../contracts/delete-inline.contract';

@CommandHandler(DeleteInlineContract)
export class DeleteInlineHandler implements ICommandHandler<DeleteInlineContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: DeleteInlineContract) {
		await this.dbInlinePolicyService.deleteInlinePolicy(contract.policyId);
	}
}
