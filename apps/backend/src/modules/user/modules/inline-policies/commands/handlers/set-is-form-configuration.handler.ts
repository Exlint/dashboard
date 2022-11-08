import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { SetIsFormConfigurationContract } from '../contracts/set-is-form-configuration.contract';

@CommandHandler(SetIsFormConfigurationContract)
export class SetIsFormConfigurationHandler implements ICommandHandler<SetIsFormConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: SetIsFormConfigurationContract) {
		await this.dbInlinePolicyService.setIsFormConfiguration(
			contract.policyId,
			contract.isFormConfiguration,
		);
	}
}
