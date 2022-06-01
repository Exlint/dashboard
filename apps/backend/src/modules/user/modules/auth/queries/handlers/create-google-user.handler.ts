import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { CreateGoogleUserContract } from '../contracts/create-google-user.contract';

@QueryHandler(CreateGoogleUserContract)
export class CreateGoogleUserHandler implements IQueryHandler<CreateGoogleUserContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: CreateGoogleUserContract) {
		const createdUser = await this.dbUserService.createUser({
			email: contract.data.email,
			name: contract.data.name,
			externalToken: contract.data.refreshToken,
			authType: 'GOOGLE',
		});

		return createdUser.id;
	}
}
