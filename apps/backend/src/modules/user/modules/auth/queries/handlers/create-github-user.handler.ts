import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { CreateGithubUserContract } from '../contracts/create-github-user.contract';

@QueryHandler(CreateGithubUserContract)
export class CreateGithubUserHandler implements IQueryHandler<CreateGithubUserContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: CreateGithubUserContract) {
		const createdUser = await this.dbUserService.createUser({
			email: contract.data.email,
			name: contract.data.name,
			authType: 'GITHUB',
			externalToken: contract.data.accessToken,
		});

		return createdUser.id;
	}
}
