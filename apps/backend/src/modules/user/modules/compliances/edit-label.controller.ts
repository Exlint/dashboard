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
import { EditComplianceLabelDto } from './classes/edit-label.dto';
import { EditLabelContract } from './commands/contracts/edit-label.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class EditLabelController {
	private readonly logger = new Logger(EditLabelController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Edit a compliance's label with a new label and its identifier" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully edited the label of the compliance' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or compliance does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to edit the label of the compliance' })
	@UseGuards(BelongingComplianceGuard)
	@Patch(Routes.EDIT_LABEL)
	@HttpCode(HttpStatus.OK)
	public async editLabel(
		@CurrentUserId() userId: string,
		@Body() editLabelDto: EditComplianceLabelDto,
		@Param('compliance_id') complianceId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to edit a compliance with an Id ${complianceId} for a user with an Id: ${userId}`,
		);

		await this.commandBus.execute<EditLabelContract, void>(
			new EditLabelContract(complianceId, editLabelDto.label),
		);

		this.logger.log(
			`Successfully edited a compliance with an Id: ${complianceId} for a user with an Id: ${userId}`,
		);
	}
}
