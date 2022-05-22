import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AuthService } from '../../auth.service';
import { RegisterContract } from '../contracts/register.contract';

@QueryHandler(RegisterContract)
export class RegisterHandler implements IQueryHandler<RegisterContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly authService: AuthService) {}

	async execute(contract: RegisterContract) {
		const passwordHash = await this.authService.hashPassword(contract.registerDto.password);

		const createdUser = await this.dbUserService.createUser({
			email: contract.registerDto.email,
			name: contract.registerDto.name,
			passwordHash,
		});

		return createdUser.id;
	}
}
