import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { UpdateGoogleRefreshTokenContract } from '../contracts/update-google-refresh-token.contract';

@CommandHandler(UpdateGoogleRefreshTokenContract)
export class DeleteUserHandler implements ICommandHandler<UpdateGoogleRefreshTokenContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: UpdateGoogleRefreshTokenContract) {
		await this.dbUserService.updateExternalToken(contract.userId, contract.refreshToken);
	}
}
