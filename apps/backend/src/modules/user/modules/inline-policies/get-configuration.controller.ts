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
import { GetConfigurationResponse } from './classes/responses';
import { GetConfigurationContract } from './queries/contracts/get-configuration.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetConfigurationController {
	private readonly logger = new Logger(GetConfigurationController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get the configuration of a policy by its identifer' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If successfully fetched the policy configuration',
		type: GetConfigurationResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch policy configuration' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async getConfiguration(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetConfigurationResponse> {
		this.logger.log(
			`Will try to fetch policy configuration belongs to use with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		const policyConfiguration = await this.queryBus.execute<GetConfigurationContract, Prisma.JsonValue>(
			new GetConfigurationContract(policyId),
		);

		this.logger.log(
			`Successfully got policy configuration belongs to user with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		return {
			configuration: policyConfiguration,
		};
	}
}
