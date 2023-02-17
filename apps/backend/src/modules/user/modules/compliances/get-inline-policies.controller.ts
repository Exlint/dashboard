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

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingComplianceGuard } from '@/guards/belonging-compliance.guard';

import Routes from './compliances.routes';
import { GetInlinePoliciesResponse } from './classes/responses';
import { GetInlinePoliciesContract } from './queries/contracts/get-inline-policies.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class GetInlinePoliciesController {
	private readonly logger = new Logger(GetInlinePoliciesController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Get all inline policies of a compliance' })
	@ApiOkResponse({
		description: 'If successfully got all inline policies of a compliance',
		type: GetInlinePoliciesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch all inline policies of a compliance' })
	@UseGuards(BelongingComplianceGuard)
	@Get(Routes.GET_INLINE_POLICIES)
	@HttpCode(HttpStatus.OK)
	public async getInlinePolicies(
		@CurrentUserId() userId: string,
		@Param('compliance_id') complianceId: string,
		@Query('p') page?: string,
	): Promise<GetInlinePoliciesResponse> {
		this.logger.log(
			`Will try to fetch all inline policies of a compliance with an ID: "${complianceId}" belong to user with an Id: "${userId}"`,
		);

		const inlinePolicies = await this.queryBus.execute<
			GetInlinePoliciesContract,
			GetInlinePoliciesResponse
		>(new GetInlinePoliciesContract(complianceId, page));

		this.logger.log(
			`Successfully got all inline policies of a compliance with an ID: "${complianceId}" belong to user with an Id: "${userId}"`,
		);

		return inlinePolicies;
	}
}
