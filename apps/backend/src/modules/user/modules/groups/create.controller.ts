import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';
import {
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiInternalServerErrorResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './groups.routes';
import { CreateGroupResponse } from './classes/responses';
import { CreateGroupContract } from './queries/contracts/create-group.contact';
import { CreateDto } from './classes/create.dto';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class CreateController {
	private readonly logger = new Logger(CreateController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Creating a group with default label' })
	@ApiCreatedResponse({ description: 'If successfully created a group', type: CreateGroupResponse })
	@ApiUnauthorizedResponse({ description: 'If access token is either missing or invalid' })
	@ApiInternalServerErrorResponse({ description: 'If failed to create the group' })
	@Post(Routes.CREATE)
	@HttpCode(HttpStatus.CREATED)
	public async create(
		@CurrentUserId() userId: string,
		@RealIP() ip: string,
		@Body() createGroupDto: CreateDto,
	): Promise<CreateGroupResponse> {
		this.logger.log(
			`Will try to create a group with label: "${createGroupDto.label}" for a user with an Id: ${userId}`,
		);

		const createdGroupId = await this.queryBus.execute<CreateGroupContract, string>(
			new CreateGroupContract(userId, ip, createGroupDto.label, createGroupDto.description),
		);

		this.logger.log(
			`Successfully created a group with label "${createGroupDto.label}" with an Id: ${createdGroupId} for a user with an Id: ${userId}`,
		);

		return {
			id: createdGroupId,
		};
	}
}
