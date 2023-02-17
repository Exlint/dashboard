import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { AvailableLabelContract } from '../contracts/available-label.contract';

@QueryHandler(AvailableLabelContract)
export class AvailableLabelHandler implements IQueryHandler<AvailableLabelContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	execute(contract: AvailableLabelContract) {
		return this.dbComplianceService.isLabelAvailable(contract.userId, contract.label);
	}
}
