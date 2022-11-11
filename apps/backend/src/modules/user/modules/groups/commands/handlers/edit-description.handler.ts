import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { EditDescriptionContract } from '../contracts/edit-description.contract';

@CommandHandler(EditDescriptionContract)
export class EditDescriptionHandler implements ICommandHandler<EditDescriptionContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: EditDescriptionContract) {
		await this.dbGroupService.editGroupDescription(contract.groupId, contract.description || null);
	}
}
