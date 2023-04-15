import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { GetGithubUserContract } from '../contracts/get-github-user.contract';

@QueryHandler(GetGithubUserContract)
export class GetGithubUserHandler implements IQueryHandler<GetGithubUserContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	public async execute(contract: GetGithubUserContract) {
		const userData = await this.dbUserService.findExternalUserByEmail(contract.email);

		return userData;
	}
}
