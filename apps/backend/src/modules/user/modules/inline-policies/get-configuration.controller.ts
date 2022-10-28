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
import type { Prisma } from '@prisma/client';

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

	@ApiOperation({ description: 'Get configuration of linter/formatter' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If fetched the configuration successfully',
		type: GetConfigurationResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to get the configuration' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async getConfiguration(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetConfigurationResponse> {
		this.logger.log(
			`Will try to get configuration of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const configuration = await this.queryBus.execute<GetConfigurationContract, Prisma.JsonObject>(
			new GetConfigurationContract(policyId),
		);

		this.logger.log(
			`Successfully fetched configuration of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return { configuration };
	}
}
