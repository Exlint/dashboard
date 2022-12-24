import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';

import { GetGroupContract } from '../contracts/get-group.contract';
import type { IGetGroupResponseData } from '../../interfaces/responses';

@QueryHandler(GetGroupContract)
export class GetGroupHandler implements IQueryHandler<GetGroupContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: GetGroupContract): Promise<IGetGroupResponseData> {
		const groupData = await this.dbGroupService.getGroup(contract.groupId);

		return groupData.inlinePolicies.map((inlinePolicy) => {
			const formConfiguration = inlinePolicy.isFormConfiguration
				? inlinePolicy.formConfiguration
				: null;

			const codeConfiguration = inlinePolicy.isFormConfiguration
				? null
				: inlinePolicy.codeConfiguration;

			return {
				...inlinePolicy,
				formConfiguration,
				codeConfiguration,
				rules: inlinePolicy.rules
					.filter((rule) => rule.isEnabled)
					.map((rule) => ({ ...rule, isEnabled: undefined })),
			};
		});
	}
}
