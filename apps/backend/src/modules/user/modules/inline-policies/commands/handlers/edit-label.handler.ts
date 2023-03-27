import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { EditLabelContract } from '../contracts/edit-label.contract';

@CommandHandler(EditLabelContract)
export class EditLabelHandler implements ICommandHandler<EditLabelContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	public async execute(contract: EditLabelContract) {
		await this.dbInlinePolicyService.editPolicyLabel(contract.policyId, contract.label);
	}
}
