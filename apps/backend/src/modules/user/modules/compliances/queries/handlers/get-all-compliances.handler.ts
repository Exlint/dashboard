import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { GetAllCompliancesContract } from '../contracts/get-all-compliances.contract';

@QueryHandler(GetAllCompliancesContract)
export class GetAllCompliancesHandler implements IQueryHandler<GetAllCompliancesContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	public async execute(contract: GetAllCompliancesContract) {
		const userCompliances = await this.dbComplianceService.getUserCompliances(contract.userId);

		return userCompliances.map((userCompliance) => ({
			...userCompliance,
			librariesNames: userCompliance.inlinePolicies.map((inlinePolicy) => inlinePolicy.library),
		}));
	}
}
