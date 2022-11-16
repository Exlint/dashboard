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
import { EnableMissingDto, EnableMissingResponse } from './classes/enable-missing.dto';
import { EnableMissingContract } from './queries/contracts/enable-missing.contract';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class EnableMissingController {
	private readonly logger = new Logger(EnableMissingController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Enable a missing rule for a policy' })
	@ApiBearerAuth('access-token')
	@ApiCreatedResponse({
		description: 'If successfully enabled the missing rule',
		type: EnableMissingResponse,
	})
	@ApiBadRequestResponse({ description: "If rule name is invalid or policy's library has no rules" })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to enable the missing rule' })
	@UseGuards(RuleablePolicyGuard)
	@Post(Routes.ENABLE_MISSING_RULE)
	@HttpCode(HttpStatus.CREATED)
	public async enableMissing(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() enableRuleDto: EnableMissingDto,
		@Library() policyLibrary: PolicyLibrary,
	): Promise<EnableMissingResponse> {
		this.logger.log(
			`Will try to enable a missing rule for a policy with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		const createdRuleId = await this.queryBus.execute<EnableMissingContract, EnableMissingResponse['id']>(
			new EnableMissingContract(policyId, enableRuleDto.name, policyLibrary),
		);

		this.logger.log(
			`Successfully enabled a missing rule with an ID: "${createdRuleId}" for a user with an ID: "${userId}"`,
		);

		return { id: createdRuleId };
	}
}
