import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { UserIdExistsContract } from '../contracts/user-id-exists.contract';

@QueryHandler(UserIdExistsContract)
export class UserIdExistsHandler implements IQueryHandler<UserIdExistsContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: UserIdExistsContract) {
		const doesUserIdExist = await this.dbUserService.doesUserIdExist(contract.userId);

		return doesUserIdExist;
	}
}
