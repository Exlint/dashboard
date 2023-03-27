import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { DeleteContract } from '../contracts/delete.contract';

@CommandHandler(DeleteContract)
export class DeleteHandler implements ICommandHandler<DeleteContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	public async execute(contract: DeleteContract) {
		await this.dbInlinePolicyService.deletePolicy(contract.policyId);
	}
}
