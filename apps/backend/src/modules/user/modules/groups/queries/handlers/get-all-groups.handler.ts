import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { Prisma } from '@prisma/client';

import { DBGroupService } from '@/modules/database/group.service';

import { GetAllGroupsContract } from '../contracts/get-all-groups.contract';

@QueryHandler(GetAllGroupsContract)
export class GetAllGroupsHandler implements IQueryHandler<GetAllGroupsContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: GetAllGroupsContract) {
		const userGroups = await this.dbGroupService.getUserGroups(contract.userId);

		return userGroups.map((userGroup) => ({
			...userGroup,
			inlinePolicies: userGroup.inlinePolicies.map((inlinePolicy) => ({
				...inlinePolicy,
				rulesCount: Object.keys((inlinePolicy.configuration as Prisma.JsonObject)?.['rules'] ?? {})
					.length,
				configuration: undefined,
			})),
		}));
	}
}
