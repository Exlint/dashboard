import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GroupHasLibraryContract } from '../contracts/group-has-library.contract';

@QueryHandler(GroupHasLibraryContract)
export class GroupHasLibraryHandler implements IQueryHandler<GroupHasLibraryContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GroupHasLibraryContract) {
		return this.dbInlinePolicyService.groupHasLibrary(contract.groupId, contract.library);
	}
}
