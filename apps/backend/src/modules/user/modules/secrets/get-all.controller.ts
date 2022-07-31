import { Controller, Get, Logger } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './secrets.routes';
import type { IGetAllSecretsResponse } from './interfaces/responses';
import { GetAllSecretsContract } from './queries/contracts/get-all-secrets.contract';
import type { IUserSecretsGetAll } from './interfaces/user-secrets';

@Controller(Routes.CONTROLLER)
export class GetAllController {
	private readonly logger = new Logger(GetAllController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@Get(Routes.GET_ALL)
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
