import { Controller, Get, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './secrets.routes';
import type { IGetAllSecretsResponse } from './interfaces/responses';
import { GetAllSecretsContract } from './queries/contracts/get-all-secrets.contract';
import type { IUserSecretsGetAll } from './interfaces/user-secrets';

@ApiTags('Secrets')
@Controller(Routes.CONTROLLER)
export class GetAllController {
	private readonly logger = new Logger(GetAllController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get all secrets of a user' })
	@ApiBearerAuth('access-token')
	@Get(Routes.GET_ALL)
	@HttpCode(HttpStatus.OK)
	public async getAll(@CurrentUserId() userId: string): Promise<IGetAllSecretsResponse> {
		this.logger.log(`Will try to fetch all secrets belong to use with an Id: "${userId}"`);

		const userSecrets = await this.queryBus.execute<GetAllSecretsContract, IUserSecretsGetAll[]>(
			new GetAllSecretsContract(userId),
		);

		this.logger.log(`Successfully got all secrets belong to user with an Id: "${userId}"`);

		return {
			secrets: userSecrets,
		};
	}
}
