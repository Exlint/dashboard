import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetConfigurationContract } from '../contracts/get-configuration.contract';

@QueryHandler(GetConfigurationContract)
export class GetConfigurationHandler implements IQueryHandler<GetConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetConfigurationContract) {
		return this.dbInlinePolicyService.getConfiguration(contract.policyId);
	}
}
