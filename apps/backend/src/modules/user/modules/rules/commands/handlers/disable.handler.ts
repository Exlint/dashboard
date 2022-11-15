import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBRuleService } from '@/modules/database/rule.service';

import { DisableContract } from '../contracts/disable.contract';

@CommandHandler(DisableContract)
export class DisableHandler implements ICommandHandler<DisableContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: DisableContract) {
		await this.dbRuleService.disableRule(contract.ruleId);
	}
}
