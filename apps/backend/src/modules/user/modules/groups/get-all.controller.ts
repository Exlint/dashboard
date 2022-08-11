import { Controller, Get, HttpCode, HttpStatus, Logger } from '@nestjs/common';
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
import { GetAllGroupsResponse } from './classes/responses';
import { GetAllGroupsContract } from './queries/contracts/get-all-groups.contract';
import type { IUserGroupGetAll } from './interfaces/user-group';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class GetAllController {
	private readonly logger = new Logger(GetAllController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Get all groups of a user' })
	@ApiOkResponse({ description: "If successfully got all user's groups", type: GetAllGroupsResponse })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to fetch all user's groups" })
	@Get(Routes.GET_ALL)
	@HttpCode(HttpStatus.OK)
	public async getAll(@CurrentUserId() userId: string): Promise<GetAllGroupsResponse> {
		this.logger.log(`Will try to fetch all groups belong to use with an Id: "${userId}"`);

		const userGroups = await this.queryBus.execute<GetAllGroupsContract, IUserGroupGetAll[]>(
			new GetAllGroupsContract(userId),
		);

		this.logger.log(`Successfully got all groups belong to user with an Id: "${userId}"`);

		return {
			groups: userGroups,
		};
	}
}
