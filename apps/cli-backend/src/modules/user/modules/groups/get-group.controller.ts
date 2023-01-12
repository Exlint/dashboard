import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import { BelongingGroupGuard } from './guards/belonging-group.guard';
import Routes from './groups.routes';
import { GetGroupContract } from './queries/contracts/get-group.contract';
import type { IGetGroupResponseData } from './interfaces/responses';

@Controller(Routes.CONTROLLER)
export class GetGroupController {
	private readonly logger = new Logger(GetGroupController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@UseGuards(BelongingGroupGuard)
	@Get(Routes.GET_GROUP)
	@HttpCode(HttpStatus.OK)
	public async getGroup(
		@Param('group_id') groupId: string,
		@CurrentUserId() userId: string,
	): Promise<IGetGroupResponseData> {
		this.logger.log(`Will try to get a group with an Id ${groupId} for a user with an Id: ${userId}`);

		const groupData = await this.queryBus.execute<GetGroupContract, IGetGroupResponseData>(
			new GetGroupContract(groupId),
		);

		this.logger.log(
			`Successfully got a group data with an Id: ${groupId} for a user with an Id: ${userId}`,
		);

		return groupData;
	}
}
