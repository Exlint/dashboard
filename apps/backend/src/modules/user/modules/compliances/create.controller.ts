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

import Routes from './compliances.routes';
import { CreateComplianceResponse } from './classes/responses';
import { CreateComplianceContract } from './queries/contracts/create-compliance.contact';
import { CreateComplianceDto } from './classes/create.dto';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class CreateController {
	private readonly logger = new Logger(CreateController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiBearerAuth('access-token')
	@ApiOperation({ description: 'Creating a compliance with default label' })
	@ApiCreatedResponse({
		description: 'If successfully created a compliance',
		type: CreateComplianceResponse,
	})
	@ApiUnauthorizedResponse({ description: 'If access token is either missing or invalid' })
	@ApiInternalServerErrorResponse({ description: 'If failed to create the compliance' })
	@Post(Routes.CREATE)
	@HttpCode(HttpStatus.CREATED)
	public async create(
		@CurrentUserId() userId: string,
		@RealIP() ip: string,
		@Body() createComplianceDto: CreateComplianceDto,
	): Promise<CreateComplianceResponse> {
		this.logger.log(
			`Will try to create a compliance with label: "${createComplianceDto.label}" for a user with an Id: ${userId}`,
		);

		const createdComplianceId = await this.queryBus.execute<CreateComplianceContract, string>(
			new CreateComplianceContract(
				userId,
				ip,
				createComplianceDto.label,
				createComplianceDto.description,
			),
		);

		this.logger.log(
			`Successfully created a compliance with label "${createComplianceDto.label}" with an Id: ${createdComplianceId} for a user with an Id: ${userId}`,
		);

		return {
			id: createdComplianceId,
		};
	}
}
