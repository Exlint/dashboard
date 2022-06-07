import { Body, Controller, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { AddRuleDto } from './classes/add-rule.dto';
import { AddRuleContract } from './commands/contracts/add-rule.contract';

@Controller(Routes.CONTROLLER)
export class AddRuleController {
	private readonly logger = new Logger(AddRuleController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(BelongingInlinePolicyGuard)
	@Post(Routes.ADD_RULE)
	public async addRule(
		@Param('policy_id') policyId: string,
		@Body() addRuleDto: AddRuleDto,
	): Promise<void> {
		this.logger.log(`Will try to add rule for an inline policy with an Id: "${policyId}"`);

		await this.commandBus.execute<AddRuleContract, void>(new AddRuleContract(policyId, addRuleDto.rule));

		this.logger.log(`Successfully added a rule for an inline policy Id: "${policyId}"`);
	}

	@UseGuards(BelongingInlinePolicyGuard)
	@Post(Routes.EDIT_RULE)
	public async editRule(
		@Param('policy_id') policyId: string,
		@Body() editRuleDto: AddRuleDto,
	): Promise<void> {
		this.logger.log(`Will try to edit rule for an inline policy with an Id: "${policyId}"`);

		await this.commandBus.execute<AddRuleContract, void>(new AddRuleContract(policyId, editRuleDto.rule));

		this.logger.log(`Successfully edited a rule for an inline policy Id: "${policyId}"`);
	}
}
