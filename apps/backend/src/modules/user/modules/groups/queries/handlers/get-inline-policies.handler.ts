import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBGroupService } from '@/modules/database/group.service';
import { librariesData } from '@/data/libraries-data';

import { GetInlinePoliciesContract } from '../contracts/get-inline-policies.contract';

@QueryHandler(GetInlinePoliciesContract)
export class GetInlinePoliciesHandler implements IQueryHandler<GetInlinePoliciesContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: GetInlinePoliciesContract) {
		const isPageANumber = !isNaN(parseInt(contract.page ?? ''));

		const data = await this.dbGroupService.getInlinePoliciesAndDescription(
			contract.groupId,
			isPageANumber ? parseInt(contract.page!) : 1,
		);

		data.inlinePolicies = data.inlinePolicies.map((inlinePolicy) => {
			const matchingLibraryData = librariesData.find(
				(libraryData) => libraryData.name === inlinePolicy.library,
			)!;

			return {
				...inlinePolicy,
				language: matchingLibraryData.language,
			};
		});

		return data;
	}
}
