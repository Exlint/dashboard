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
import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import Routes from './groups.routes';
import { GetInlinePoliciesResponse } from './classes/responses';
import { GetInlinePoliciesContract } from './queries/contracts/get-inline-policies.contract';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class GetInlinePoliciesController {
	private readonly logger = new Logger(GetInlinePoliciesController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Get all inline policies of a group' })
	@ApiOkResponse({
		description: 'If successfully got all inline policies of a group',
		type: GetInlinePoliciesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch all inline policies of a group' })
	@UseGuards(BelongingGroupGuard)
	@Get(Routes.GET_INLINE_POLICIES)
	@HttpCode(HttpStatus.OK)
	public async getInlinePolicies(
		@CurrentUserId() userId: string,
		@Param('group_id') groupId: string,
		@Query('p') page?: string,
	): Promise<GetInlinePoliciesResponse> {
		this.logger.log(
			`Will try to fetch all inline policies of a group with an ID: "${groupId}" belong to user with an Id: "${userId}"`,
		);

		const inlinePolicies = await this.queryBus.execute<
			GetInlinePoliciesContract,
			GetInlinePoliciesResponse
		>(new GetInlinePoliciesContract(groupId, page));

		this.logger.log(
			`Successfully got all inline policies of a group with an ID: "${groupId}" belong to user with an Id: "${userId}"`,
		);

		return inlinePolicies;
	}
}
