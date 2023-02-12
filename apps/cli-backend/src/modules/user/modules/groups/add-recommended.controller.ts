import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './groups.routes';
import type { IAddRecommendedResponseData } from './interfaces/responses';
import { RecommendedDto } from './classes/create.dto';
import { AddRecommendedContract } from './queries/contracts/add-recommended.contract';

@Controller(Routes.CONTROLLER)
export class AddRecommendedController {
	private readonly logger = new Logger(AddRecommendedController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@Post(Routes.ADD_RECOMMENDED)
	@HttpCode(HttpStatus.OK)
	public async addRecommended(
		@Body() recommendedDto: RecommendedDto,
		@CurrentUserId() userId: string,
	): Promise<IAddRecommendedResponseData> {
		this.logger.log(`Will try to add recommeded group for languages: "${recommendedDto.languages}"`);

		const createdGroupId = await this.queryBus.execute<AddRecommendedContract, string>(
			new AddRecommendedContract(userId, recommendedDto.languages),
		);

		this.logger.log(`Successfully created a recommended group with an ID: "${createdGroupId}"`);

		return { groupId: createdGroupId };
	}
}
