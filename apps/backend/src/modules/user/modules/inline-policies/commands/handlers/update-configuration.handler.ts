import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { UpdateConfigurationContract } from '../contracts/update-configuration.contract';

@CommandHandler(UpdateConfigurationContract)
export class UpdateConfigurationHandler implements ICommandHandler<UpdateConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: UpdateConfigurationContract) {
		const parsedConfiguration = JSON.parse(contract.configuration);

		await this.dbInlinePolicyService.updateConfiguration(contract.policyId, parsedConfiguration);
	}
}
