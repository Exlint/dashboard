import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { EditLabelContract } from '../contracts/edit-label.contract';

@CommandHandler(EditLabelContract)
export class EditLabelHandler implements ICommandHandler<EditLabelContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	async execute(contract: EditLabelContract) {
		await this.dbComplianceService.editComplianceLabel(contract.complianceId, contract.label);
	}
}
