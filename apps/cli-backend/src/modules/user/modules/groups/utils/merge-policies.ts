import deepmerge from 'deepmerge';

import type { IRecommendedPolicy } from '@/interfaces/recommended-policy';

export const mergePolicies = (policies: IRecommendedPolicy[]) => {
	const policiesByLibraryMap = policies.reduce<
		Partial<Record<IRecommendedPolicy['library'], IRecommendedPolicy[]>>
	>((final, policy) => {
		if (Array.isArray(final[policy.library])) {
			return {
				...final,
				[policy.library]: [...final[policy.library]!, policy],
			};
		}

		return {
			...final,
			[policy.library]: [policy],
		};
	}, {});

	return Object.values(policiesByLibraryMap).map(
		(groupedPolicy) =>
			deepmerge.all(groupedPolicy, {
				arrayMerge: (_, sourceArray) => sourceArray,
			}) as IRecommendedPolicy,
	);
};
