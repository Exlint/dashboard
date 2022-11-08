import { Body, Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import Routes from './groups.routes';
import { EditGroupLabelDto } from './classes/edit-label.dto';
import { EditLabelContract } from './commands/contracts/edit-label.contract';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class EditLabelController {
	private readonly logger = new Logger(EditLabelController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Edit a group's label with a new label and its identifier" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully edited the label of the group' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or group does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to edit the label of the group' })
	@UseGuards(BelongingGroupGuard)
	@Patch(Routes.EDIT_LABEL)
	@HttpCode(HttpStatus.OK)
	public async editLabel(
		@CurrentUserId() userId: string,
		@Body() editLabelDto: EditGroupLabelDto,
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
