import { Body, Controller, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { RemoveRuleDto } from './classes/remove-rule.dto';
import { RemoveRuleContract } from './commands/contracts/remove-rule.contract';

@Controller(Routes.CONTROLLER)
export class RemoveRuleController {
	private readonly logger = new Logger(RemoveRuleController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(BelongingInlinePolicyGuard)
	@Post(Routes.EDIT_RULE)
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
