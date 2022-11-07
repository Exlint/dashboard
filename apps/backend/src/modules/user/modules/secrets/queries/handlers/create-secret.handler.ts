import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { SecretsService } from '../../secrets.service';
import { CreateSecretContract } from '../contracts/create-secret.cotract';
import type { CreateSecretResponse } from '../../classes/responses';

@QueryHandler(CreateSecretContract)
export class CreateSecretHandler implements IQueryHandler<CreateSecretContract> {
	constructor(
		private readonly dbClientSecretService: DBClientSecretService,
		private readonly secretsService: SecretsService,
	) {}

	async execute(contract: CreateSecretContract): Promise<CreateSecretResponse> {
		const secret = await this.secretsService.generateSecret(
			contract.userId,
			contract.email,
			contract.expiration,
		);

		const expirationDate = contract.expiration ? new Date(contract.expiration) : null;

		const createdSecret = await this.dbClientSecretService.createSecret(
			contract.userId,
			secret,
			contract.label,
			expirationDate,
		);

		return { id: createdSecret.id, secret };
	}
}
