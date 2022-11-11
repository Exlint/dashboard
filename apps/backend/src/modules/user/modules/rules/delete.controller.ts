import { Controller, Delete, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
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
import { DeleteContract } from './commands/contracts/delete.contract';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Deleting a rule with provided identifier' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully deleted the rule' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or rule does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to delete the rule' })
	@UseGuards(BelongingRuleGuard)
	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async delete(@CurrentUserId() userId: string, @Param('rule_id') ruleId: string): Promise<void> {
		this.logger.log(
			`Will try to delete a rule with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<DeleteContract, void>(new DeleteContract(ruleId));

		this.logger.log(
			`Successfully deleted a rule with an ID: "${ruleId}" for a user with an ID: "${userId}"`,
		);
	}
}
