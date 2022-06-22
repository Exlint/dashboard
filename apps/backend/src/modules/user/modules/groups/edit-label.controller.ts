import { Body, Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import Routes from './groups.routes';
import { EditLabelDto } from './classes/edit-label.dto';
import { EditLabelContract } from './commands/contracts/edit-label.contract';

@Controller(Routes.CONTROLLER)
export class EditLabelController {
	private readonly logger = new Logger(EditLabelController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(BelongingGroupGuard)
	@Patch(Routes.EDIT_LABEL)
	@HttpCode(HttpStatus.OK)
	public async editLabel(
		@CurrentUserId() userId: string,
		@Body() editLabelDto: EditLabelDto,
		@Param('group_id') groupId: string,
	): Promise<void> {
		this.logger.log(`Will try to edit a group with an Id ${groupId} for a user with an Id: ${userId}`);

		await this.commandBus.execute<EditLabelContract, void>(
			new EditLabelContract(groupId, editLabelDto.label),
		);

		this.logger.log(
			`Successfully edited a group with an Id: ${groupId} for a user with an Id: ${userId}`,
		);
	}
}
