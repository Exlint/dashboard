import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { EditLabelContract } from '../contracts/edit-label.contract';

@CommandHandler(EditLabelContract)
export class EditLabelHandler implements ICommandHandler<EditLabelContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: EditLabelContract) {
		await this.dbGroupService.editGroupLabel(contract.groupId, contract.label);
	}
}
