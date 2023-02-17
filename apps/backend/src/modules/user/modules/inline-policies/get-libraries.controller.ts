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
import { BelongingComplianceGuard } from '@/guards/belonging-compliance.guard';

import Routes from './inline-policies.routes';
import { GetLibrariesResponse } from './classes/responses';
import { UserComplianceLibrariesContract } from './queries/contracts/user-compliance-libraries.contract';

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
		description: 'If access token is invalid or missing, or compliance does not belong to user',
	})
	@UseGuards(BelongingComplianceGuard)
	@Get(Routes.GET_LIBRARIES)
	@HttpCode(HttpStatus.OK)
	public async getLibraries(
		@CurrentUserId() userId: string,
		@Param('compliance_id') complianceId: string,
	): Promise<GetLibrariesResponse> {
		this.logger.log(`Will try to get libraries with a user ID: "${userId}"`);

		const complianceLibraries = await this.queryBus.execute<
			UserComplianceLibrariesContract,
			PolicyLibrary[]
		>(new UserComplianceLibrariesContract(complianceId));

		const libraries = librariesData
			.filter((library) => !complianceLibraries.includes(library.name))
			.map((library) => ({
				...library,
				rules: undefined,
				configuration: undefined,
			}));

		this.logger.log(`Successfully got libraries with a user ID: "${userId}"`);

		return {
			libraries,
		};
	}
}
