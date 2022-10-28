import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { SetCodeConfigurationContract } from '../contracts/set-code-configuration.contract';
import { parseInput } from '../../utils/parsers';

@CommandHandler(SetCodeConfigurationContract)
export class SetCodeConfigurationHandler implements ICommandHandler<SetCodeConfigurationContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: SetCodeConfigurationContract) {
		const parsedCodeInput = parseInput(contract.code, contract.type);

		await this.dbInlinePolicyService.setCodeConfiguration(contract.policyId, parsedCodeInput);
	}
}
