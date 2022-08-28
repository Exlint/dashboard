import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import type { Prisma } from '@prisma/client';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { GetRulesResponse } from './classes/responses';
import { GetRulesContract } from './queries/contracts/get-rules.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetRulesController {
	private readonly logger = new Logger(GetRulesController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get the rules of a policy by its identifer' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If successfully fetched the policy rules',
		type: GetRulesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch policy rules' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_RULES)
	@HttpCode(HttpStatus.OK)
	public async getConfiguration(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetRulesResponse> {
		this.logger.log(
			`Will try to fetch policy rules belongs to use with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		const policyRules = await this.queryBus.execute<GetRulesContract, Prisma.JsonValue>(
			new GetRulesContract(policyId),
		);

		this.logger.log(
			`Successfully got policy rules belongs to user with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		return {
			rules: policyRules,
		};
	}
}
