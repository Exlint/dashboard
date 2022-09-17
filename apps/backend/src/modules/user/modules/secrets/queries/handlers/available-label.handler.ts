import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBClientSecretService } from '@/modules/database/client-secret.service';

import { AvailableLabelContract } from '../contracts/available-label.contract';

@QueryHandler(AvailableLabelContract)
export class AvailableLabelHandler implements IQueryHandler<AvailableLabelContract> {
	constructor(private readonly dbClientSecretsService: DBClientSecretService) {}

	execute(contract: AvailableLabelContract) {
		return this.dbClientSecretsService.isLabelAvailable(contract.userId, contract.label);
	}
}
