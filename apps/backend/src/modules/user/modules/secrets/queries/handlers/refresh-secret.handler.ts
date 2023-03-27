import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { RefreshSecretContract } from '../contracts/refresh-secret.contract';
import { SecretsService } from '../../secrets.service';

@QueryHandler(RefreshSecretContract)
export class RefreshSecretHandler implements IQueryHandler<RefreshSecretContract> {
	constructor(
		private readonly dbClientSecretService: DBClientSecretService,
		private readonly secretsService: SecretsService,
	) {}

	public async execute(contract: RefreshSecretContract) {
		const expiration = await this.dbClientSecretService.getSecretExpiration(contract.secretId);

		const secret = await this.secretsService.generateSecret(
			contract.userId,
			contract.userEmail,
			expiration ? expiration.getTime() : null,
		);

		await this.dbClientSecretService.refreshSecret(contract.secretId, secret);

		return secret;
	}
}
