import { Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './rules.routes';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';
import { DisableContract } from './commands/contracts/disable.contract';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class DisableController {
	private readonly logger = new Logger(DisableController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Disable a rule with provided identifier' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully disabled the rule' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or rule does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to disable the rule' })
	@UseGuards(BelongingRuleGuard, ThrottlerGuard)
	@Patch(Routes.DISABLE_RULE)
	@HttpCode(HttpStatus.OK)
	public async disable(@CurrentUserId() userId: string, @Param('rule_id') ruleId: string): Promise<void> {
		this.logger.log(
			`Will try to disable a rule with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<DisableContract, void>(new DisableContract(ruleId));

		this.logger.log(
			`Successfully disabled a rule with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);
	}
}
