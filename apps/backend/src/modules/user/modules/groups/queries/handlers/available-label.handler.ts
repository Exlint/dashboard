import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { AvailableLabelContract } from '../contracts/available-label.contract';

@QueryHandler(AvailableLabelContract)
export class AvailableLabelHandler implements IQueryHandler<AvailableLabelContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	execute(contract: AvailableLabelContract) {
		return this.dbGroupService.isLabelAvailable(contract.userId, contract.label);
	}
}
