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

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { UpdateConfigurationDto } from './classes/update-configuration.dto';
import { UpdateConfigurationContract } from './commands/contracts/update-configuration.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class UpdateConfigurationController {
	private readonly logger = new Logger(UpdateConfigurationController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Update the configuration of a policy by its identifier' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully update configuration of policy' })
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to update policy configuration' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.UPDATE_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async updateConfiguration(
		@Param('policy_id') policyId: string,
		@Body() updateConfigurationDto: UpdateConfigurationDto,
	): Promise<void> {
		this.logger.log(`Will try to update configuration for an inline policy with an Id: "${policyId}"`);

		await this.commandBus.execute<UpdateConfigurationContract, void>(
			new UpdateConfigurationContract(policyId, updateConfigurationDto.configuration),
		);

		this.logger.log(`Successfully updated a configuration for an inline policy Id: "${policyId}"`);
	}
}
