import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import type { IRecommendedPolicy } from '@/interfaces/recommended-policy';
import { Language } from '@/models/languages';

import type { IRecommendedResponseData } from '../../interfaces/responses';
import { cssHtmlPolicies } from '../../models/csshtml-recommendation';
import { golangPolicies } from '../../models/golang-recommendation';
import { javascriptPolicies } from '../../models/javascript-recommendation';
import { pythonPolicies } from '../../models/python-recommendation';
import { reactPolicies } from '../../models/react-recommendation';
import { mergePolicies } from '../../utils/merge-policies';
import { RecommendedContract } from '../contracts/recommended.contract';

@QueryHandler(RecommendedContract)
export class RecommendedHandler implements IQueryHandler<RecommendedContract> {
	public async execute(contract: RecommendedContract): Promise<IRecommendedResponseData> {
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

		return mergedRecommendedPolicies;
	}
}
