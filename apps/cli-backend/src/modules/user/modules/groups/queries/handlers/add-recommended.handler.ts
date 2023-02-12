import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Language } from '@/models/languages';
import type { IRecommendedPolicy } from '@/interfaces/recommended-policy';
import { DBGroupService } from '@/modules/database/group.service';

import { cssHtmlPolicies } from '../../models/csshtml-recommendation';
import { golangPolicies } from '../../models/golang-recommendation';
import { javascriptPolicies } from '../../models/javascript-recommendation';
import { pythonPolicies } from '../../models/python-recommendation';
import { reactPolicies } from '../../models/react-recommendation';
import { mergePolicies } from '../../utils/merge-policies';
import { AddRecommendedContract } from '../contracts/add-recommended.contract';

@QueryHandler(AddRecommendedContract)
export class AddRecommendedHandler implements IQueryHandler<AddRecommendedContract> {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async execute(contract: AddRecommendedContract): Promise<string> {
		const recommendedPolicies: IRecommendedPolicy[] = [];

		if (contract.languages.includes(Language.Golang)) {
			recommendedPolicies.push(...golangPolicies);
		}

		if (contract.languages.includes(Language.Python)) {
			recommendedPolicies.push(...pythonPolicies);
		}

		if (contract.languages.includes(Language['CSS & HTML'])) {
			recommendedPolicies.push(...cssHtmlPolicies);
		}

		if (contract.languages.includes(Language.JavaScript)) {
			recommendedPolicies.push(...javascriptPolicies);
		}

		if (contract.languages.includes(Language.React)) {
			recommendedPolicies.push(...reactPolicies);
		}

		const mergedRecommendedPolicies = await Promise.resolve(mergePolicies(recommendedPolicies));

		const createdGroupId = await this.dbGroupService.addRecommendedGroup(
			contract.userId,
			mergedRecommendedPolicies,
			contract.languages,
		);

		return createdGroupId;
	}
}
