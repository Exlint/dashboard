import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBRuleService } from '@/modules/database/rule.service';

import { UpdateConfigurationContract } from '../contracts/update-configuration.contract';

@CommandHandler(UpdateConfigurationContract)
export class UpdateConfigurationHandler implements ICommandHandler<UpdateConfigurationContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: UpdateConfigurationContract) {
		await this.dbRuleService.updateRuleConfiguration(contract.ruleId, contract.configuration);
	}
}
