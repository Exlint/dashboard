import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { DeleteUserContract } from '../contracts/delete-user.contract';

@CommandHandler(DeleteUserContract)
export class DeleteUserHandler implements ICommandHandler<DeleteUserContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: DeleteUserContract) {
		await this.dbUserService.deleteUser(contract.userId);
	}
}
