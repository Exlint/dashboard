import { Controller, Get, Logger } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './groups.routes';
import type { IGetAllGroupsResponse } from './interfaces/responses';
import { GetAllGroupsContract } from './queries/contracts/get-all-groups.contract';
import type { IUserGroupGetAll } from './interfaces/user-group';

@Controller(Routes.CONTROLLER)
export class GetAllController {
	private readonly logger = new Logger(GetAllController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@Get(Routes.GET_ALL)
	public async getAll(@CurrentUserId() userId: string): Promise<IGetAllGroupsResponse> {
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
