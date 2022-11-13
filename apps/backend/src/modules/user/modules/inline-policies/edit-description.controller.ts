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
import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';

import Routes from './inline-policies.routes';
import { EditPolicyDescriptionDto } from './classes/edit-description.dto';
import { EditDescriptionContract } from './commands/contracts/edit-description.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class EditDescriptionController {
	private readonly logger = new Logger(EditDescriptionController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Edit a policy's description with a new description" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully edited the description of the policy' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to edit the description of the policy' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.EDIT_DESCRIPTION)
	@HttpCode(HttpStatus.OK)
	public async editDescription(
		@CurrentUserId() userId: string,
		@Body() editDescriptionDto: EditPolicyDescriptionDto,
		@Param('policy_id') policyId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to edit a policy's description with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<EditDescriptionContract, void>(
			new EditDescriptionContract(policyId, editDescriptionDto.description),
		);

		this.logger.log(
			`Successfully edited a policy's description with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);
	}
}
