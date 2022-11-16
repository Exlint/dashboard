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

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';

import Routes from './inline-policies.routes';
import { GetPolicyResponse } from './classes/responses';
import { GetContract } from './queries/contracts/get.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetController {
	private readonly logger = new Logger(GetController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get data of policy' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'Returns data of policy',
		type: GetPolicyResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is invalid or missing, or provided policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to get data of policy' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET)
	@HttpCode(HttpStatus.OK)
	public async get(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetPolicyResponse> {
		this.logger.log(
			`Will try to get data of a policy with an ID: "${policyId}" with a user ID: "${userId}"`,
		);

		const policyData = await this.queryBus.execute<GetContract, GetPolicyResponse>(
			new GetContract(policyId),
		);

		this.logger.log(
			`Successfully got data of a policy with an ID: "${policyId}" with a user ID: "${userId}"`,
		);

		return policyData;
	}
}
