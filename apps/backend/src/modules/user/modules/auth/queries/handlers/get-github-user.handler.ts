import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { DBUserService } from '@/modules/database/user.service';

import { GetGithubUserContract } from '../contracts/get-github-user.contract';

@QueryHandler(GetGithubUserContract)
export class GetGithubUserHandler implements IQueryHandler<GetGithubUserContract> {
	private readonly logger = new Logger('TESTERRR!!');

	constructor(private readonly dbUserService: DBUserService) {}

	public async execute(contract: GetGithubUserContract) {
		try {
			const userData = await this.dbUserService.findExternalUserByEmail(contract.email);

			return userData;
		} catch (e) {
			this.logger.log(`Failed yazif with: ${e}`);
		}

		return null;
	}
}
