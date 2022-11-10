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

import Routes from './secrets.routes';
import { GetAllSecretsResponse } from './classes/responses';
import { GetAllSecretsContract } from './queries/contracts/get-all-secrets.contract';

@ApiTags('Secrets')
@Controller(Routes.CONTROLLER)
export class GetAllController {
	private readonly logger = new Logger(GetAllController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get all secrets of a user' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: "If successfully fetched all user's secrets",
		type: GetAllSecretsResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is invalid or missing',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to fetch the user's secrets" })
	@Get(Routes.GET_ALL)
	@HttpCode(HttpStatus.OK)
	public async getAll(@CurrentUserId() userId: string): Promise<GetAllSecretsResponse> {
		this.logger.log(`Will try to fetch all secrets belong to user with an Id: "${userId}"`);

		const userSecrets = await this.queryBus.execute<
			GetAllSecretsContract,
			GetAllSecretsResponse['secrets']
		>(new GetAllSecretsContract(userId));

		this.logger.log(`Successfully got all secrets belong to user with an Id: "${userId}"`);

		return {
			secrets: userSecrets,
		};
	}
}
