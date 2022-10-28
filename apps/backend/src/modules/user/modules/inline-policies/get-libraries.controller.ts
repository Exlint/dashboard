import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import {
	ApiBearerAuth,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';
import type { PolicyLibrary } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { librariesData } from '@/data/libraries-data';
import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import Routes from './inline-policies.routes';
import { GetLibrariesResponse } from './classes/responses';
import { UserGroupLibrariesContract } from './queries/contracts/user-group-libraries.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetLibrariesController {
	private readonly logger = new Logger(GetLibrariesController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Fetch all libraries Exlint offers' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'Returns libraries Exlint offers',
		type: GetLibrariesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is invalid or missing, or group does not belong to user',
	})
	@UseGuards(BelongingGroupGuard)
	@Get(Routes.GET_LIBRARIES)
	@HttpCode(HttpStatus.OK)
	public async getLibraries(
		@CurrentUserId() userId: string,
		@Param('group_id') groupId: string,
	): Promise<GetLibrariesResponse> {
		this.logger.log(`Will try to get libraries with a user ID: "${userId}"`);

		const groupLibraries = await this.queryBus.execute<UserGroupLibrariesContract, PolicyLibrary[]>(
			new UserGroupLibrariesContract(groupId),
		);

		const libraries = librariesData
			.filter((library) => !groupLibraries.includes(library.name))
			.map((library) => ({
				...library,
				rules: undefined,
			}));

		this.logger.log(`Successfully got libraries with a user ID: "${userId}"`);

		return {
			libraries,
		};
	}
}
