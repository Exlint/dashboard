import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { DeleteContract } from '../contracts/delete.contract';

@CommandHandler(DeleteContract)
export class DeleteHandler implements ICommandHandler<DeleteContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	async execute(contract: DeleteContract) {
		await this.dbComplianceService.deleteCompliance(contract.complianceId);
	}
}
