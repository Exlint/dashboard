import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { GetGroupContract } from '../contracts/get-group.contract';

@QueryHandler(GetGroupContract)
export class GetGroupHandler implements IQueryHandler<GetGroupContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	execute(contract: GetGroupContract) {
		return this.dbGroupService.getUserGroup(contract.userId, contract.groupId);
	}
}
