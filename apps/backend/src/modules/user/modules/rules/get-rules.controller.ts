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
import type { IGetRulesResponseData } from '@exlint-dashboard/common';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';

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
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_RULES)
	@HttpCode(HttpStatus.OK)
	public async getFormSchema(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetRulesResponse> {
		this.logger.log(
			`Will try to fetch rules and related data of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const rulesData = await this.queryBus.execute<GetRulesContract, IGetRulesResponseData['rules']>(
			new GetRulesContract(policyId),
		);

		this.logger.log(
			`Successfully fetched rulesand related data of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return { rules: rulesData };
	}
}
