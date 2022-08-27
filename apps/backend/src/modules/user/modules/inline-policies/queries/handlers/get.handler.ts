import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetContract } from '../contracts/get.contract';

@CommandHandler(GetContract)
export class GetHandler implements ICommandHandler<GetContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetContract) {
		return this.dbInlinePolicyService.getData(contract.policyId);
	}
}
