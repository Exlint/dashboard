import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiInternalServerErrorResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import Routes from './secrets.routes';
import { CreateSecretResponse } from './classes/responses';
import { CreateSecretContract } from './queries/contracts/create-secret.contract';
import { CreateSecretDto } from './classes/create-secret.dto';

@ApiTags('Secrets')
@Controller(Routes.CONTROLLER)
export class CreateController {
	private readonly logger = new Logger(CreateController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Create a secret for a user' })
	@ApiBearerAuth('access-token')
	@ApiCreatedResponse({
		description: 'If successfully created a secret',
		type: CreateSecretResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to create a secret' })
	@Post(Routes.CREATE)
	@HttpCode(HttpStatus.CREATED)
	public async create(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
		@Body() createSecretDto: CreateSecretDto,
	): Promise<CreateSecretResponse> {
		this.logger.log(`Will try to create a client secret with to user with an Id: "${userId}"`);

		const secret = await this.queryBus.execute<CreateSecretContract, CreateSecretResponse>(
			new CreateSecretContract(
				userId,
				userEmail,
				createSecretDto.label,
				createSecretDto.expiration ? new Date(createSecretDto.expiration).getTime() : null,
			),
		);

		this.logger.log('Successfully created a client secret');

		return secret;
	}
}
