import { Controller, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './groups.routes';
import type { ICreateGroupResponse } from './interfaces/responses';
import { CreateGroupContract } from './queries/contracts/create-group.contact';

@Controller(Routes.CONTROLLER)
export class CreateController {
	private readonly logger = new Logger(CreateController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@Post(Routes.CREATE)
	public async create(
		@CurrentUserId() userId: string,
		@RealIP() ip: string,
	): Promise<ICreateGroupResponse> {
		this.logger.log(`Will try to create a group for a user with an Id: ${userId}`);

		const createdGroupId = await this.queryBus.execute<CreateGroupContract, string>(
			new CreateGroupContract(userId, ip),
		);

		this.logger.log(
			`Successfully created a group with an Id: ${createdGroupId} for a user with an Id: ${userId}`,
		);

		return {
			groupId: createdGroupId,
		};
	}
}
