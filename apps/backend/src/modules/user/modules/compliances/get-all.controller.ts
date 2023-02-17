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

import Routes from './compliances.routes';
import { GetAllCompliancesResponse } from './classes/responses';
import { GetAllCompliancesContract } from './queries/contracts/get-all-compliances.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class GetAllController {
	private readonly logger = new Logger(GetAllController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Get all compliances of a user' })
	@ApiOkResponse({
		description: "If successfully got all user's compliances",
		type: GetAllCompliancesResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to fetch all user's compliances" })
	@Get(Routes.GET_ALL)
	@HttpCode(HttpStatus.OK)
	public async getAll(@CurrentUserId() userId: string): Promise<GetAllCompliancesResponse> {
		this.logger.log(`Will try to fetch all compliances belong to user with an Id: "${userId}"`);

		const userCompliances = await this.queryBus.execute<
			GetAllCompliancesContract,
			GetAllCompliancesResponse['compliances']
		>(new GetAllCompliancesContract(userId));

		this.logger.log(`Successfully got all compliances belong to user with an Id: "${userId}"`);

		return {
			compliances: userCompliances,
		};
	}
}
