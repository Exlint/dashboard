import { Body, Controller, Delete, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
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
import { RemoveRuleDto } from './classes/remove-rule.dto';
import { RemoveRuleContract } from './commands/contracts/remove-rule.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class RemoveRuleController {
	private readonly logger = new Logger(RemoveRuleController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Remove a rule (by its name) of a policiy by its identifier' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully deleted the rule' })
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to delete rule' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Delete(Routes.REMOVE_RULE)
	@HttpCode(HttpStatus.OK)
	public async removeRule(
		@Param('policy_id') policyId: string,
		@Body() removeRuleDto: RemoveRuleDto,
	): Promise<void> {
		this.logger.log(
			`Will try to remove rule "${removeRuleDto.ruleName}" for an inline policy with an Id: "${policyId}"`,
		);

		await this.commandBus.execute<RemoveRuleContract, void>(
			new RemoveRuleContract(policyId, removeRuleDto.ruleName),
		);

		this.logger.log(
			`Successfully removed a rule "${removeRuleDto.ruleName}" for an inline policy Id: "${policyId}"`,
		);
	}
}
