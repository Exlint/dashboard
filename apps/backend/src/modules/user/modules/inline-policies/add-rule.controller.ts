import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Logger,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { AddRuleDto } from './classes/add-rule.dto';
import { AddRuleContract } from './commands/contracts/add-rule.contract';
import { EditRuleContract } from './commands/contracts/edit-rule.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class AddRuleController {
	private readonly logger = new Logger(AddRuleController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Add a new rule for an inline policy' })
	@ApiBearerAuth('access-token')
	@UseGuards(BelongingInlinePolicyGuard)
	@Post(Routes.ADD_RULE)
	@HttpCode(HttpStatus.CREATED)
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

	@ApiOperation({ description: 'Edit a rule of an inline policy' })
	@ApiBearerAuth('access-token')
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.EDIT_RULE)
	@HttpCode(HttpStatus.OK)
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
