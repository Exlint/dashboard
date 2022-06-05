import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { RevokeSecretsContract } from '../contracts/revoke-secrets.contract';

@CommandHandler(RevokeSecretsContract)
export class RevokeSecretsHandler implements ICommandHandler<RevokeSecretsContract> {
	constructor(private readonly dbClientSecretService: DBClientSecretService) {}

	async execute(contract: RevokeSecretsContract) {
		await this.dbClientSecretService.revokeAllSecrets(contract.userId);
	}
}
