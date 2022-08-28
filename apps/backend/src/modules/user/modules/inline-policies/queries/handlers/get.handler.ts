import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetContract } from '../contracts/get.contract';

@QueryHandler(GetContract)
export class GetHandler implements IQueryHandler<GetContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: GetContract) {
		const policyData = await this.dbInlinePolicyService.getData(contract.policyId);

		return {
			label: policyData.label,
			createdAt: policyData.createdAt.getTime(),
			library: policyData.library,
			groupLabel: policyData.group.label,
		};
	}
}
