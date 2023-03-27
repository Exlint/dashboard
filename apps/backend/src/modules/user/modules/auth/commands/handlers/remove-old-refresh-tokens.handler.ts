import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { RemoveOldRefreshTokensContract } from '../contracts/remove-old-refresh-tokens.contract';

@CommandHandler(RemoveOldRefreshTokensContract)
export class RemoveOldRefreshTokensHandler implements ICommandHandler<RemoveOldRefreshTokensContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	public async execute(contract: RemoveOldRefreshTokensContract) {
		await this.dbUserService.removeOldRefreshTokens(contract.userId);
	}
}
