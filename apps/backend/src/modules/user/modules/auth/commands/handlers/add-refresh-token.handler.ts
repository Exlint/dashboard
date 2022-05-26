import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AddRefreshTokenContract } from '../contracts/add-refresh-token.contract';

@CommandHandler(AddRefreshTokenContract)
export class AddRefreshTokenHandler implements ICommandHandler<AddRefreshTokenContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: AddRefreshTokenContract) {
		await this.dbUserService.addRefreshToken(contract.userId, contract.token);
	}
}
