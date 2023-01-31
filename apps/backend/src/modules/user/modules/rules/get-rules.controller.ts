import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { IGetRulesResponseData } from '@exlint.io/common';
import { PolicyLibrary } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { RuleablePolicyGuard } from '@/guards/ruleable-policy.guard';
import { Library } from '@/decorators/library.decorator';

import { GetRulesResponse } from './classes/get-rules.dto';
import Routes from './rules.routes';
import { GetRulesContract } from './queries/contracts/get-rules.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetRulesController {
	private readonly logger = new Logger(GetRulesController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Fetch rules of library and enabled ones' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If fetched the rules successfully',
		type: GetRulesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch the rules' })
	@UseGuards(RuleablePolicyGuard)
	@Get(Routes.GET_RULES)
	@HttpCode(HttpStatus.OK)
	public async getFormSchema(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Library() policyLibrary: PolicyLibrary,
	): Promise<GetRulesResponse> {
		this.logger.log(
			`Will try to fetch rules and related data of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const rulesData = await this.queryBus.execute<GetRulesContract, IGetRulesResponseData['rules']>(
			new GetRulesContract(policyId, policyLibrary),
		);

		this.logger.log(
			`Successfully fetched rules and related data of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return { rules: rulesData };
	}
}
