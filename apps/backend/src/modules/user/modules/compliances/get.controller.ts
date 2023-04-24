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

import Routes from './compliances.routes';
import { GetComplianceResponse } from './classes/responses';
import { GetComplianceContract } from './queries/contracts/get-compliance.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class GetController {
	private readonly logger = new Logger(GetController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Get a compliance of a user' })
	@ApiOkResponse({ description: "If successfully got a user's compliance", type: GetComplianceResponse })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to fetch a user's compliance" })
	@Get(Routes.GET)
	@HttpCode(HttpStatus.OK)
	public async get(
		@CurrentUserId() userId: string,
		@Param('compliance_id') complianceId: string,
	): Promise<GetComplianceResponse> {
		this.logger.log(
			`Will try to fetch a user compliance with an ID: "${complianceId}" belongs to user with an Id: "${userId}"`,
		);

		const userCompliance = await this.queryBus.execute<
			GetComplianceContract,
			GetComplianceResponse | null
		>(new GetComplianceContract(complianceId));

		if (!userCompliance) {
			throw new NotFoundException();
		}

		this.logger.log(
			`Successfully got user compliance with an ID: "${complianceId}" belong to user with an Id: "${userId}"`,
		);

		return userCompliance;
	}
}
