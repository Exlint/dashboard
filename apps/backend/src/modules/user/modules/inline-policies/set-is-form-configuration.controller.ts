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
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { SetIsFormConfigurationDto } from './classes/set-is-form-configuration.dto';
import { SetIsFormConfigurationContract } from './commands/contracts/set-is-form-configuration.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class SetIsFormConfigurationController {
	private readonly logger = new Logger(SetIsFormConfigurationController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Set whether user selected to config the policy using form configuration' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If set the paramater successfully',
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to set the paramater' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.SET_IS_FORM_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async setIsFormConfiguration(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() setIsFormConfigurationDto: SetIsFormConfigurationDto,
	): Promise<void> {
		this.logger.log(
			`Will try to set whether user selected form configuration for policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		await this.commandBus.execute<SetIsFormConfigurationContract, void>(
			new SetIsFormConfigurationContract(policyId, setIsFormConfigurationDto.isFormConfiguration),
		);

		this.logger.log(
			`Successfully set whether user selected form configuration for policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);
	}
}
