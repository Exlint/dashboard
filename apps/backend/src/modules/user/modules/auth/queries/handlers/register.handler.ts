import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AuthService } from '../../auth.service';
import { CreateUserContract } from '../contracts/create-user.contract';

@QueryHandler(CreateUserContract)
export class RegisterHandler implements IQueryHandler<CreateUserContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly authService: AuthService) {}

	async execute(contract: CreateUserContract) {
		const passwordHash = await this.authService.hashPassword(contract.registerDto.password);

		const createdUser = await this.dbUserService.createUser({
			email: contract.registerDto.email,
			name: contract.registerDto.name,
			passwordHash,
		});

		return createdUser.id;
	}
}
