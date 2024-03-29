import {
	BadRequestException,
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Logger,
	Param,
	Post,
	UseGuards,
} from '@nestjs/common';
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
import { BelongingComplianceGuard } from '@/guards/belonging-compliance.guard';

import Routes from './inline-policies.routes';
import { CreatePolicyDto } from './classes/create.dto';
import { CreateContract } from './queries/contracts/create.contract';
import { ComplianceHasLibraryContract } from './queries/contracts/compliance-has-library.contract';
import { CreatePolicyResponse } from './classes/responses';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class CreateController {
	private readonly logger = new Logger(CreateController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Create a new inline policy with label, description and chosen library' })
	@ApiBearerAuth('access-token')
	@ApiCreatedResponse({
		description: 'If successfully created the inline policy',
		type: CreatePolicyResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or compliance does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to create inline policy' })
	@UseGuards(BelongingComplianceGuard)
	@Post(Routes.CREATE)
	@HttpCode(HttpStatus.CREATED)
	public async create(
		@CurrentUserId() userId: string,
		@Param('compliance_id') complianceId: string,
		@Body() createDto: CreatePolicyDto,
		@RealIP() ip: string,
	): Promise<CreatePolicyResponse> {
		this.logger.log(
			`Will try to create an inline policy for a user with an Id: "${userId}" and for compliance with Id: "${complianceId}". Label is "${createDto.label}"`,
		);

		const complianceHasLibrary = await this.queryBus.execute<ComplianceHasLibraryContract, boolean>(
			new ComplianceHasLibraryContract(complianceId, createDto.library),
		);

		if (complianceHasLibrary) {
			throw new BadRequestException();
		}

		const createdPolicyId = await this.queryBus.execute<CreateContract, string>(
			new CreateContract(
				userId,
				complianceId,
				createDto.label,
				createDto.description,
				createDto.library,
				ip,
			),
		);

		this.logger.log(
			`Successfully created an inline policy for a user with an Id: "${userId}" and for compliance with Id: "${complianceId}". Label is "${createDto.label}"`,
		);

		return { id: createdPolicyId };
	}
}
