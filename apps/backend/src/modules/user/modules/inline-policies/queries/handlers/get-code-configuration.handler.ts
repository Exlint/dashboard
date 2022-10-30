import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetCodeConfigurationContract } from '../contracts/get-code-configuration.contract';

@QueryHandler(GetCodeConfigurationContract)
export class GetCodeConfigurationHandler implements IQueryHandler<GetCodeConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetCodeConfigurationContract) {
		return this.dbInlinePolicyService.getCodeConfiguration(contract.policyId);
	}
}
