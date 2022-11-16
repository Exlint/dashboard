import { Controller, Get, HttpCode, HttpStatus, Logger, Param, Query, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { Library } from '@/decorators/library.decorator';
import { RuleablePolicyGuard } from '@/guards/ruleable-policy.guard';

import Routes from './inline-policies.routes';
import { GetPolicyRulesResponse } from './classes/get-policy-rules.dto';
import { GetPolicyRulesContract } from './queries/contracts/get-policy-rules.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetPolicyRulesController {
	private readonly logger = new Logger(GetPolicyRulesController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get rules applied on a policy' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: "If fetched the policy's rules successfully",
		type: GetPolicyRulesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to fetch the policy's rules" })
	@UseGuards(RuleablePolicyGuard)
	@Get(Routes.GET_POLICY_RULES)
	@HttpCode(HttpStatus.OK)
	public async getPolicyRules(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Library() policyLibrary: PolicyLibrary,
		@Query('p') page?: string,
	): Promise<GetPolicyRulesResponse> {
		this.logger.log(
			`Will try to fetch policy's rules of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const policyData = await this.queryBus.execute<GetPolicyRulesContract, GetPolicyRulesResponse>(
			new GetPolicyRulesContract(policyId, policyLibrary, page),
		);

		this.logger.log(
			`Successfully fetched form schema of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return policyData;
	}
}
