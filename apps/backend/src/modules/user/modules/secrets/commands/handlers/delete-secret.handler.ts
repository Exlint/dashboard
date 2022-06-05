import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { DeleteSecretContract } from '../contracts/delete-secret.contract';

@CommandHandler(DeleteSecretContract)
export class DeleteSecretHandler implements ICommandHandler<DeleteSecretContract> {
	constructor(private readonly dbClientSecretService: DBClientSecretService) {}

	async execute(contract: DeleteSecretContract) {
		await this.dbClientSecretService.deleteSecret(contract.secretId);
	}
}
