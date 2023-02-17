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
import { BelongingComplianceGuard } from '@/guards/belonging-compliance.guard';

import Routes from './compliances.routes';
import { EditComplianceDescriptionDto } from './classes/edit-description.dto';
import { EditDescriptionContract } from './commands/contracts/edit-description.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class EditDescriptionController {
	private readonly logger = new Logger(EditDescriptionController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({
		description: "Edit a compliance's description with a new description and its identifier",
	})
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully edited the description of the compliance' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or compliance does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to edit the description of the compliance' })
	@UseGuards(BelongingComplianceGuard)
	@Patch(Routes.EDIT_DESCRIPTION)
	@HttpCode(HttpStatus.OK)
	public async editDescription(
		@CurrentUserId() userId: string,
		@Body() editDescriptionDto: EditComplianceDescriptionDto,
		@Param('compliance_id') complianceId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to edit a compliance with an Id ${complianceId} for a user with an Id: ${userId}`,
		);

		await this.commandBus.execute<EditDescriptionContract, void>(
			new EditDescriptionContract(complianceId, editDescriptionDto.description),
		);

		this.logger.log(
			`Successfully edited a compliance with an Id: ${complianceId} for a user with an Id: ${userId}`,
		);
	}
}
