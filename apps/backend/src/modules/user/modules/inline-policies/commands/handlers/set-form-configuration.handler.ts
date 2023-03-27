import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { SetFormConfigurationContract } from '../contracts/set-form-configuration.contract';

@CommandHandler(SetFormConfigurationContract)
export class SetFormConfigurationHandler implements ICommandHandler<SetFormConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	public async execute(contract: SetFormConfigurationContract) {
		await this.dbInlinePolicyService.setFormConfiguration(contract.policyId, contract.data);
	}
}
