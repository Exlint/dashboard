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

import Routes from './inline-policies.routes';
import { EditPolicyLabelDto } from './classes/edit-label.dto';
import { EditLabelContract } from './commands/contracts/edit-label.contract';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class EditLabelController {
	private readonly logger = new Logger(EditLabelController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Edit a policy's label with a new label" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully edited the label of the policy' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to edit the label of the policy' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.EDIT_LABEL)
	@HttpCode(HttpStatus.OK)
	public async editLabel(
		@CurrentUserId() userId: string,
		@Body() editLabelDto: EditPolicyLabelDto,
		@Param('policy_id') policyId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to edit a policy with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<EditLabelContract, void>(
			new EditLabelContract(policyId, editLabelDto.label),
		);

		this.logger.log(
			`Successfully edited a policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);
	}
}
