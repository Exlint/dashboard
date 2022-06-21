import { Body, Controller, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { AddRuleDto } from './classes/add-rule.dto';
import { AddRuleContract } from './commands/contracts/add-rule.contract';
import { EditRuleContract } from './commands/contracts/edit-rule.contract';

@Controller(Routes.CONTROLLER)
export class AddRuleController {
	private readonly logger = new Logger(AddRuleController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(BelongingInlinePolicyGuard)
	@Post(Routes.ADD_RULE)
	public async addRule(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() addRuleDto: AddRuleDto,
		@RealIP() ip: string,
	): Promise<void> {
		this.logger.log(`Will try to add rule for an inline policy with an Id: "${policyId}"`);

		await this.commandBus.execute<AddRuleContract, void>(
			new AddRuleContract(policyId, addRuleDto.rule, userId, ip),
		);

		this.logger.log(`Successfully added a rule for an inline policy Id: "${policyId}"`);
	}

	@UseGuards(BelongingInlinePolicyGuard)
	@Post(Routes.EDIT_RULE)
	public async editRule(
		@Param('policy_id') policyId: string,
		@Body() editRuleDto: AddRuleDto,
	): Promise<void> {
		this.logger.log(`Will try to edit rule for an inline policy with an Id: "${policyId}"`);

		await this.commandBus.execute<EditRuleContract, void>(
			new EditRuleContract(policyId, editRuleDto.rule),
		);

		this.logger.log(`Successfully edited a rule for an inline policy Id: "${policyId}"`);
	}
}
