import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { EditDescriptionContract } from '../contracts/edit-description.contract';

@CommandHandler(EditDescriptionContract)
export class EditDescriptionHandler implements ICommandHandler<EditDescriptionContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	public async execute(contract: EditDescriptionContract) {
		await this.dbComplianceService.editComplianceDescription(
			contract.complianceId,
			contract.description || null,
		);
	}
}
