import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBRuleService } from '@/modules/database/rule.service';

import { DeleteContract } from '../contracts/delete.contract';

@CommandHandler(DeleteContract)
export class DeleteHandler implements ICommandHandler<DeleteContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: DeleteContract) {
		await this.dbRuleService.deleteRule(contract.ruleId);
	}
}
