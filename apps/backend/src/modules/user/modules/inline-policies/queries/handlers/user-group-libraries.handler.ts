import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { UserGroupLibrariesContract } from '../contracts/user-group-libraries.contract';

@QueryHandler(UserGroupLibrariesContract)
export class UserGroupLibrariesHandler implements IQueryHandler<UserGroupLibrariesContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: UserGroupLibrariesContract) {
		const records = await this.dbInlinePolicyService.getUserGroupLibraries(contract.groupId);

		return records.map((record) => record.library);
	}
}
