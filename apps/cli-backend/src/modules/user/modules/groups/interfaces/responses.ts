import type { InlinePolicy, Rule } from '@prisma/client';

import type { IRecommendedPolicy } from '../../../../../interfaces/recommended-policy';

export type IGetGroupResponseData = (Pick<
	InlinePolicy,
	| 'library'
	| 'formConfiguration'
	| 'codeConfiguration'
	| 'isFormConfiguration'
	| 'codeType'
	| 'lintedList'
	| 'ignoredList'
> & { readonly rules: Pick<Rule, 'name' | 'configuration'>[] })[];

export type IRecommendedResponseData = IRecommendedPolicy[];

export interface IAddRecommendedResponseData {
	readonly groupId: string;
}
