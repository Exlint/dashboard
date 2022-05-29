import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { GetGithubUserContract } from '../contracts/get-github-user.contract';

@QueryHandler(GetGithubUserContract)
export class GetGithubUserHandler implements IQueryHandler<GetGithubUserContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: GetGithubUserContract) {
		const userData = await this.dbUserService.findGoogleUserByEmail(contract.email);

		return userData;
	}
}
