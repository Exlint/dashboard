import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { AvailableLabelContract } from '../contracts/available-label.contract';

@QueryHandler(AvailableLabelContract)
export class AvailableLabelHandler implements IQueryHandler<AvailableLabelContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	public execute(contract: AvailableLabelContract) {
		return this.dbInlinePolicyService.isLabelAvailable(contract.userId, contract.label);
	}
}
