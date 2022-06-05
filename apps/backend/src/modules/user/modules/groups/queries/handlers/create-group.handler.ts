import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { CreateGroupContract } from '../contracts/create-group.contact';

@QueryHandler(CreateGroupContract)
export class CreateGroupHandler implements IQueryHandler<CreateGroupContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: CreateGroupContract) {
		const createdGroupId = await this.dbGroupService.createGroup(contract.userId);

		return createdGroupId;
	}
}
