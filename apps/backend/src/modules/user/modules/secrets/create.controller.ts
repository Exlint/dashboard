import { Body, Controller, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './secrets.routes';
import { ICreateClientSecret } from './interfaces/responses';
import { CreateSecretContract } from './queries/contracts/create-secret.cotract';
import { CreateSecretDto } from './classes/create-secret.dto';

@Controller(Routes.CONTROLLER)
export class CreateController {
	private readonly logger = new Logger(CreateController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@Post(Routes.CREATE)
	public async create(
		@CurrentUserId() userId: string,
		@Body() createSecretDto: CreateSecretDto,
	): Promise<ICreateClientSecret> {
		this.logger.log(`Will try to create a client secret with to user with an Id: "${userId}"`);

		let expirationDate: Date | null = null;

		if (createSecretDto.expiration !== null) {
			expirationDate = new Date(createSecretDto.expiration);
		}

		const secret = await this.queryBus.execute<CreateSecretContract, string>(
			new CreateSecretContract(userId, createSecretDto.label, expirationDate),
		);

		this.logger.log('Successfully deleted a client secret');

		return { clientSecret: secret };
	}
}
