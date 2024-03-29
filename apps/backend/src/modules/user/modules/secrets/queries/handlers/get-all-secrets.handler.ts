import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { GetAllSecretsContract } from '../contracts/get-all-secrets.contract';

@QueryHandler(GetAllSecretsContract)
export class GetAllSecretsHandler implements IQueryHandler<GetAllSecretsContract> {
	constructor(private readonly dbClientSecretsService: DBClientSecretService) {}

	public async execute(contract: GetAllSecretsContract) {
		const secrets = await this.dbClientSecretsService.getSecrets(contract.userId);

		return secrets.map((secret) => ({
			...secret,
			expiration: secret.expiration ? secret.expiration.getTime() : null,
		}));
	}
}
