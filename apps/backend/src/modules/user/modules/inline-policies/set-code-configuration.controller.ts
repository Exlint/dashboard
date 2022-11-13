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
import { SetCodeConfigurationDto } from './classes/set-code-configuration.dto';
import { SetCodeConfigurationContract } from './commands/contracts/set-code-configuration.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class SetCodeConfigurationController {
	private readonly logger = new Logger(SetCodeConfigurationController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Set policy's configuration using a code" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully set configuration of the policy' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to set configuration of the policy' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.SET_CODE_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async setCodeConfiguration(
		@CurrentUserId() userId: string,
		@Body() setCodeConfigurationDto: SetCodeConfigurationDto,
		@Param('policy_id') policyId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to set a policy's configuration with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<SetCodeConfigurationContract, void>(
			new SetCodeConfigurationContract(
				policyId,
				setCodeConfigurationDto.code,
				setCodeConfigurationDto.type,
			),
		);

		this.logger.log(
			`Successfully set a policy configuration an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);
	}
}
