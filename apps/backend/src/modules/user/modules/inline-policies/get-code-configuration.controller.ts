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
import { GetCodeConfigurationResponse } from './classes/responses';
import { GetCodeConfigurationContract } from './queries/contracts/get-code-configuration.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetCodeConfigurationController {
	private readonly logger = new Logger(GetCodeConfigurationController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get code configuration of linter/formatter' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If fetched the configuration successfully',
		type: GetCodeConfigurationResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to get the configuration' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_CODE_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async getCodeConfiguration(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetCodeConfigurationResponse> {
		this.logger.log(
			`Will try to get code configuration of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const configuration = await this.queryBus.execute<
			GetCodeConfigurationContract,
			Pick<InlinePolicy, 'codeConfiguration' | 'codeType'>
		>(new GetCodeConfigurationContract(policyId));

		this.logger.log(
			`Successfully fetched configuration of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return configuration;
	}
}
