import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { EditDescriptionContract } from '../contracts/edit-description.contract';

@CommandHandler(EditDescriptionContract)
export class EditDescriptionHandler implements ICommandHandler<EditDescriptionContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: EditDescriptionContract) {
		await this.dbInlinePolicyService.editPolicyDescription(
			contract.policyId,
			contract.description || null,
		);
	}
}
