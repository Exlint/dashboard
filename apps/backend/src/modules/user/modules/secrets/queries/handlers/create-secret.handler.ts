import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { SecretsService } from '../../secrets.service';
import { CreateSecretContract } from '../contracts/create-secret.cotract';

@QueryHandler(CreateSecretContract)
export class CreateSecretHandler implements IQueryHandler<CreateSecretContract> {
	constructor(
		private readonly dbClientSecretService: DBClientSecretService,
		private readonly secretsService: SecretsService,
	) {}

	async execute(contract: CreateSecretContract) {
		const secret = this.secretsService.generateSecret();

		await this.dbClientSecretService.createSecret(
			contract.userId,
			secret,
			contract.label,
			contract.expiration,
		);

		return secret;
	}
}
