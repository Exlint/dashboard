import { Body, Controller, HttpCode, HttpStatus, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiInternalServerErrorResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { Library } from '@/decorators/library.decorator';
import { RuleablePolicyGuard } from '@/guards/ruleable-policy.guard';

import Routes from './rules.routes';
import { EnableRuleContract } from './queries/contracts/enable-rule.contract';
import { EnableRuleDto, EnableRuleResponse } from './classes/enable-rule.dto';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class EnableRuleController {
	private readonly logger = new Logger(EnableRuleController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Enable a rule for a policy' })
	@ApiBearerAuth('access-token')
	@ApiCreatedResponse({ description: 'If successfully enabled the rule', type: EnableRuleResponse })
	@ApiBadRequestResponse({ description: "If rule name is invalid or policy's library has no rules" })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to enable the rule' })
	@UseGuards(RuleablePolicyGuard)
	@Post(Routes.ENABLE_RULE)
	@HttpCode(HttpStatus.CREATED)
	public async enableRule(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() enableRuleDto: EnableRuleDto,
		@Library() policyLibrary: PolicyLibrary,
	): Promise<EnableRuleResponse> {
		this.logger.log(
			`Will try to enable a rule for a policy with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		const createdRuleId = await this.queryBus.execute<EnableRuleContract, EnableRuleResponse['id']>(
			new EnableRuleContract(policyId, enableRuleDto.name, policyLibrary),
		);

		this.logger.log(
			`Successfully enabled a rule with an ID: "${createdRuleId}" for a user with an ID: "${userId}"`,
		);

		return { id: createdRuleId };
	}
}
