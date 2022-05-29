import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AuthService } from '../../auth.service';
import { CreateLocalUserContract } from '../contracts/create-local-user.contract';

@QueryHandler(CreateLocalUserContract)
export class CreateLocalUserHandler implements IQueryHandler<CreateLocalUserContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly authService: AuthService) {}

	async execute(contract: CreateLocalUserContract) {
		const passwordHash = await this.authService.hashPassword(contract.data.password);

		const createdUser = await this.dbUserService.createUser({
			email: contract.data.email,
			name: contract.data.name,
			passwordHash,
			authType: 'LOCAL',
		});

		return createdUser.id;
	}
}
