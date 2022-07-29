import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetConfigurationContract } from '../contracts/get-configuration.contract';

@CommandHandler(GetConfigurationContract)
export class GetConfigurationHandler implements ICommandHandler<GetConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetConfigurationContract) {
		return this.dbInlinePolicyService.getConfiguration(contract.policyId);
	}
}
