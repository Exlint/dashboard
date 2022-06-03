import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { EditSecretContract } from '../contracts/edit-secret.contract';

@CommandHandler(EditSecretContract)
export class EditSecretHandler implements ICommandHandler<EditSecretContract> {
	constructor(private readonly dbClientSecretService: DBClientSecretService) {}

	async execute(contract: EditSecretContract) {
		await this.dbClientSecretService.editSecretLabel(contract.secretId, contract.label);
	}
}
