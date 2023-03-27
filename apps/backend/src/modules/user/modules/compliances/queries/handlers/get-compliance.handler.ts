import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { GetComplianceContract } from '../contracts/get-compliance.contract';

@QueryHandler(GetComplianceContract)
export class GetComplianceHandler implements IQueryHandler<GetComplianceContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	public execute(contract: GetComplianceContract) {
		return this.dbComplianceService.getUserCompliance(contract.complianceId);
	}
}
