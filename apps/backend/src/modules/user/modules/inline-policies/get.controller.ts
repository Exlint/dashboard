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
import type { InlinePolicy } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { GetResponse } from './classes/responses';
import { GetContract } from './queries/contracts/get.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetController {
	private readonly logger = new Logger(GetController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get the data of a policy by its identifer' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If successfully fetched the policy data',
		type: GetResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch policy data' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET)
	@HttpCode(HttpStatus.OK)
	public async get(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetResponse> {
		this.logger.log(
			`Will try to fetch policy data belongs to use with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		const policyData = await this.queryBus.execute<
			GetContract,
			Pick<InlinePolicy, 'label' | 'createdAt' | 'library'>
		>(new GetContract(policyId));

		this.logger.log(
			`Successfully got policy data belongs to user with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		return {
			...policyData,
			createdAt: policyData.createdAt.getTime(),
		};
	}
}
