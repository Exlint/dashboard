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

import Routes from './rules.routes';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';
import { UpdateRuleConfigurationDto } from './classes/update-configuration.dto';
import { UpdateConfigurationContract } from './commands/contracts/update-configuration.contract';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class UpdateConfigurationController {
	private readonly logger = new Logger(UpdateConfigurationController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: "Update an exist rule's configuration" })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully updated the rule' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or rule does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to update the rule' })
	@UseGuards(BelongingRuleGuard)
	@Patch(Routes.UPDATE_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async updateConfiguration(
		@CurrentUserId() userId: string,
		@Param('rule_id') ruleId: string,
		@Body() updateRuleConfigurationDto: UpdateRuleConfigurationDto,
	): Promise<void> {
		this.logger.log(
			`Will try to update a rule's configuration with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<UpdateConfigurationContract, void>(
			new UpdateConfigurationContract(ruleId, updateRuleConfigurationDto.configuration),
		);

		this.logger.log(
			`Successfully updated a rule's configuration with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);
	}
}
