import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { LoginContract } from '../contracts/login.contract';

@QueryHandler(LoginContract)
export class LoginHandler implements IQueryHandler<LoginContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: LoginContract) {
		const userData = await this.dbUserService.findByEmail(contract.email);

		return userData;
	}
}
