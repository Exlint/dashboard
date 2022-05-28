import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AuthService } from '../../auth.service';
import { CreateUserContract } from '../contracts/create-user.contract';

@QueryHandler(CreateUserContract)
export class RegisterHandler implements IQueryHandler<CreateUserContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly authService: AuthService) {}

	async execute(contract: CreateUserContract) {
		const passwordHash = await this.authService.hashPassword(contract.registerData.password!);

		const createdUser = await this.dbUserService.createUser({
			email: contract.registerData.email,
			name: contract.registerData.name,
			passwordHash,
			authType: contract.registerData.authType,
		});

		return createdUser.id;
	}
}
