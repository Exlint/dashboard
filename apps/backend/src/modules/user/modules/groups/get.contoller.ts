import { Controller, Get, HttpCode, HttpStatus, Logger, NotFoundException, Param } from '@nestjs/common';
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

import Routes from './groups.routes';
import { GetGroupResponse } from './classes/responses';
import { GetGroupContract } from './queries/contracts/get-group.contract';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class GetController {
	private readonly logger = new Logger(GetController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Get a group of a user' })
	@ApiOkResponse({ description: "If successfully got a user's group", type: GetGroupResponse })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to fetch a user's group" })
	@Get(Routes.GET)
	@HttpCode(HttpStatus.OK)
	public async get(
		@CurrentUserId() userId: string,
		@Param('group_id') groupId: string,
	): Promise<GetGroupResponse> {
		this.logger.log(
			`Will try to fetch a user group with an ID: "${groupId}" belongs to user with an Id: "${userId}"`,
		);

		const userGroup = await this.queryBus.execute<GetGroupContract, GetGroupResponse | null>(
			new GetGroupContract(groupId),
		);

		if (!userGroup) {
			throw new NotFoundException();
		}

		this.logger.log(
			`Successfully got user group with an ID: "${groupId}" belong to user with an Id: "${userId}"`,
		);

		return userGroup;
	}
}
