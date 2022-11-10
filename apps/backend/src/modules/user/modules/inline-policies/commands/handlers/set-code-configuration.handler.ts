import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { SetCodeConfigurationContract } from '../contracts/set-code-configuration.contract';

@CommandHandler(SetCodeConfigurationContract)
export class SetCodeConfigurationHandler implements ICommandHandler<SetCodeConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: SetCodeConfigurationContract) {
		const codeConfiguration = contract.code === '' ? null : contract.code;

		await this.dbInlinePolicyService.setCodeConfiguration(
			contract.policyId,
			codeConfiguration,
			contract.type,
		);
	}
}
