import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { UpdateExternalTokenContract } from '../contracts/update-external-token.contract';

@CommandHandler(UpdateExternalTokenContract)
export class UpdateExternalTokenHandler implements ICommandHandler<UpdateExternalTokenContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: UpdateExternalTokenContract) {
		await this.dbUserService.updateExternalToken(contract.userId, contract.externalToken);
	}
}
