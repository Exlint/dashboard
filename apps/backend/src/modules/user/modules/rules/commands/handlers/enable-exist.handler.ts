import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBRuleService } from '@/modules/database/rule.service';

import { EnableExistContract } from '../contracts/enable-exist.contract';

@CommandHandler(EnableExistContract)
export class EnableExistHandler implements ICommandHandler<EnableExistContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: EnableExistContract) {
		await this.dbRuleService.enableExistRule(contract.ruleId);
	}
}
