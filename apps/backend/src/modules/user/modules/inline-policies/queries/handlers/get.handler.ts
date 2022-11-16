import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';
import { librariesData } from '@/data/libraries-data';

import { GetContract } from '../contracts/get.contract';
import type { GetPolicyResponse } from '../../classes/responses';

@QueryHandler(GetContract)
export class GetHandler implements IQueryHandler<GetContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: GetContract): Promise<GetPolicyResponse> {
		const policy = await this.dbInlinePolicyService.get(contract.policyId);

		const libraryData = librariesData.find((library) => library.name === policy.library)!;

		return {
			groupLabel: policy.group.label,
			label: policy.label,
			library: policy.library,
			hasRules: !!libraryData.rules,
		};
	}
}
