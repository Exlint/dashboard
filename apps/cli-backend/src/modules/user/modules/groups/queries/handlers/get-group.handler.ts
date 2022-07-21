import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { GetGroupContract } from '../contracts/get-group.contract';

@QueryHandler(GetGroupContract)
export class GetGroupHandler implements IQueryHandler<GetGroupContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: GetGroupContract) {
		const createdGroupId = await this.dbGroupService.getGroup(contract.groupId);

		return createdGroupId;
	}
}
