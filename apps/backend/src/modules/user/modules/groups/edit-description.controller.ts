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
import { EditGroupDescriptionDto } from './classes/edit-description.dto';
import { EditDescriptionContract } from './commands/contracts/edit-description.contract';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class EditDescriptionController {
	private readonly logger = new Logger(EditDescriptionController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Edit a group's description with a new description and its identifier" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully edited the description of the group' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or group does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to edit the description of the group' })
	@UseGuards(BelongingGroupGuard)
	@Patch(Routes.EDIT_DESCRIPTION)
	@HttpCode(HttpStatus.OK)
	public async editDescription(
		@CurrentUserId() userId: string,
		@Body() editDescriptionDto: EditGroupDescriptionDto,
		@Param('group_id') groupId: string,
	): Promise<void> {
		this.logger.log(`Will try to edit a group with an Id ${groupId} for a user with an Id: ${userId}`);

		await this.commandBus.execute<EditDescriptionContract, void>(
			new EditDescriptionContract(groupId, editDescriptionDto.description),
		);

		this.logger.log(
			`Successfully edited a group with an Id: ${groupId} for a user with an Id: ${userId}`,
		);
	}
}
