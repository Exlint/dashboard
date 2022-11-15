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

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { RuleablePolicyGuard } from '@/guards/ruleable-policy.guard';

import Routes from './rules.routes';
import { EnableExistContract } from './commands/contracts/enable-exist.contract';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class EnableExistController {
	private readonly logger = new Logger(EnableExistController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Enable an exist rule for a policy' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully enabled the rule' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or rule does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to enable the rule' })
	@UseGuards(RuleablePolicyGuard)
	@Patch(Routes.ENABLE_EXIST_RULE)
	@HttpCode(HttpStatus.OK)
	public async enableRule(
		@CurrentUserId() userId: string,
		@Param('rule_id') ruleId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to enable a rule with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<EnableExistContract, void>(new EnableExistContract(ruleId));

		this.logger.log(
			`Successfully enabled a rule with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);
	}
}
