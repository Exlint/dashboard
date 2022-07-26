import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { DeleteContract } from '../contracts/delete.contract';

@CommandHandler(DeleteContract)
export class DeleteHandler implements ICommandHandler<DeleteContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: DeleteContract) {
		await this.dbGroupService.deleteGroup(contract.groupId);
	}
}
